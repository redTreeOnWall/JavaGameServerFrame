package com.lirunlong.gameSystem;


import com.lirunlong.CompileParam.CompileParam;
import com.lirunlong.mes.Mes;
import com.lirunlong.mes.Mes.Ping;
import com.lirunlong.user.User;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;

public class UserHandler {
    private UserManager uMng(){
        return Game.getInstance().getUserManager();
    }

    private User user;
    private ChannelHandlerContext ctx;
    public void SendMes(Mes.Msg mes){
        if(CompileParam.MES_LOG){
            System.out.println("----------");
            System.out.println("↓ "+ user+":");
            System.out.println(mes);
            System.out.println("==========");
        }
        byte[] bts = mes.toByteArray();
//        ctx.write(Unpooled.copiedBuffer(bts));
        ctx.channel().write(new BinaryWebSocketFrame( Unpooled.copiedBuffer(bts)));
        ctx.flush();
    }

    public void OnMesGet(Mes.Msg mes){
        if(CompileParam.MES_LOG){
            System.out.println("----------");
            System.out.println("↑ "+ user+":");
            System.out.println(mes);
            System.out.println("==========");
        }

        if(user == null){
            if(mes.getMesId()!= Mes.MesId.m_C_Login){
                return;
            }
        }

        switch (mes.getMesId()){
            case m_Ping:
                Mes.Msg ms = Mes.Msg.newBuilder()
                        .setMesId(Mes.MesId.m_Ping)
                        .setPing( Ping.newBuilder() )
                        .build();
                SendMes(ms);
                break;
            case m_C_Login:
                String userId = mes.getCLogin().getUserName();
                if(uMng().users.containsKey(userId)){
                    System.out.println("重复登陆！！");
                    Mes.Msg mlogin = Mes.Msg.newBuilder()
                            .setMesId(Mes.MesId.m_S_Login)
                            .setSLogin(Mes.S_Login.newBuilder().setIsSuc(0)).build();
                    SendMes(mlogin);
                    return;
                }
                uMng().users.put(userId,this);
                //TODO:从数据库判断并构建
                user =  new User();
                user.setUserId(userId);
                System.out.println(user+" 登入");
                uMng().showUsers();
                Mes.Msg mlogin = Mes.Msg.newBuilder()
                        .setMesId(Mes.MesId.m_S_Login)
                        .setSLogin(Mes.S_Login.newBuilder().setIsSuc(1)).build();
                SendMes(mlogin);
                break;
            case UNRECOGNIZED:
                break;
        }
    }

    public void onErrOrClose(){
        if(user !=null && uMng().users.containsKey(user.getUserId())){
            uMng().users.remove(user.getUserId());
            System.out.println(user+" 退出");
            uMng().showUsers();
        }
    }


    public ChannelHandlerContext getCtx() {
        return ctx;
    }

    public void setCtx(ChannelHandlerContext ctx) {
        this.ctx = ctx;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
