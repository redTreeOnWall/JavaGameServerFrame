package com.lirunlong.net.websocket;

import com.google.protobuf.InvalidProtocolBufferException;
import com.lirunlong.gameSystem.Game;
import com.lirunlong.gameSystem.UserHandler;
import com.lirunlong.mes.Mes;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketFrame;

public class TestHandle implements IWebSocketMesHandle{
    private UserHandler userHandler =  new UserHandler();
    @Override
    public void onFrameGet(ChannelHandlerContext ctx, WebSocketFrame frame) {
        userHandler.setCtx(ctx);
        if(frame instanceof BinaryWebSocketFrame){
            BinaryWebSocketFrame da = (BinaryWebSocketFrame)frame;
            ByteBuf buf = da.content();
            byte[] array = new byte[buf.capacity()];
            buf.readBytes(array);
//            short msgId = (short) (((array[1] << 8 ) | array[0] & 0xff));
//            System.out.println(msgId);

            try {
                Mes.Msg m = Mes.Msg.parseFrom(array);
                userHandler.OnMesGet(m);
            } catch (InvalidProtocolBufferException e) {
                System.out.println("onSuprted messageType");
            }
        }
    }

    @Override
    public void onConnected(ChannelHandlerContext ctx, FullHttpRequest req) {
    }

    @Override
    public void onClose() {
        userHandler.onErrOrClose();
    }

    @Override
    public void onErr() {
        userHandler.onErrOrClose();
    }

    private void removeUserHandle(){

    }
}
