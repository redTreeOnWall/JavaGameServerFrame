package com.lirunlong.net.http.HttpHandlers;

import com.lirunlong.net.http.HttpHandle;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.HttpContent;
import io.netty.handler.codec.http.HttpRequest;

public class TestHttpHadle extends HttpHandle{
    static int count =1;
    @Override
    public void serve(ChannelHandlerContext ctx, HttpRequest request, HttpContent content) {
        System.out.println(request.uri() +"=========== "+count);
        final String rui = request.uri();
        boolean isFull =!HttpServerPool.getPool().addTask(() -> {
                try {
                    Thread.sleep((long)(Math.random() * 10000));
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                responsString(ctx,"down after 3s");
                System.out.println("down :" + rui);
        });

        count++;

        if(isFull){
            responsString(ctx , "busy");
            System.out.println("busy:"+count);
        }
    }
}
