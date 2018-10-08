package com.lirunlong.net.websocket;

import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.websocketx.WebSocketFrame;

public interface IWebSocketMesHandle {
    void onFrameGet(ChannelHandlerContext ctx, WebSocketFrame frame);
    void onConnected(ChannelHandlerContext ctx, FullHttpRequest req);
    void onClose();
    void onErr();
}
