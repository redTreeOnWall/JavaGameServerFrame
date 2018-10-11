package com.lirunlong.net.websocket;

import com.lirunlong.net.tool.HttpHead;
import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;

import java.io.UnsupportedEncodingException;

public class WebsocketServerHandler extends ChannelInboundHandlerAdapter {

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws UnsupportedEncodingException {
        ByteBuf in = (ByteBuf) msg;
        byte[] req = new byte[in.readableBytes()];
        in.readBytes(req);
        HttpHead httpHead = new HttpHead(req);

        boolean isConnectionUpgrade =  httpHead.linesMap.containsKey("Connection") && httpHead.linesMap.get("Connection").equals("Upgrade");
        boolean isWebSocket =  httpHead.linesMap.containsKey("Upgrade") && httpHead.linesMap.get("Upgrade").equals( "websocket");


        if(isConnectionUpgrade && isWebSocket){
            System.out.println("new websocket get");
            System.out.println(this.hashCode());
        }else{
            ctx.write(Unpooled.copiedBuffer("not websocket".getBytes()));
            ctx.flush();
            ctx.close();
            System.out.println(ctx);
        }


//        System.out.println("收到客户端消息: ------------------ \r\n" + body);
//        String calrResult = "你好.";
//        ctx.write(Unpooled.copiedBuffer(calrResult.getBytes()));
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        System.out.println("comp");
        ctx.flush();
    }

    /**
     * 异常处理
     */
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        ctx.close();
    }
}
