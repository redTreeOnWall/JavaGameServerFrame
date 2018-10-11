package com.lirunlong.net.websocket;

import com.google.protobuf.InvalidProtocolBufferException;
import com.lirunlong.mes.Mes;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketFrame;

public class TestHandle implements IWebSocketMesHandle{
    @Override
    public void onFrameGet(ChannelHandlerContext ctx, WebSocketFrame frame) {
        if(frame instanceof BinaryWebSocketFrame){
            BinaryWebSocketFrame da = (BinaryWebSocketFrame)frame;

            ByteBuf buf = da.content();

            byte[] array = new byte[buf.capacity()];
            buf.readBytes(array);
            Mes.CubeRotation rot = null;
            try {
                rot = Mes.CubeRotation.parseFrom(array);
            } catch (InvalidProtocolBufferException e) {
                e.printStackTrace();
            }
            System.out.println(rot.getVector3().getX());

        }
    }

    @Override
    public void onConnected(ChannelHandlerContext ctx, FullHttpRequest req) {

    }

    @Override
    public void onClose() {

    }

    @Override
    public void onErr() {

    }
}
