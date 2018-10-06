package com.lirunlong.main;

import com.lirunlong.net.http.HttpServer;
import com.lirunlong.net.websocket.WebsocketServer;

public class MainClass {
    public static void main(String[] args) {
        //httpServer
        new HttpServer(8080).start();
        //websocket
        new WebsocketServer(5050).start();
    }
}
