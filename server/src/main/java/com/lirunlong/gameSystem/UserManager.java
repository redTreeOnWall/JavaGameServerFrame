package com.lirunlong.gameSystem;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class UserManager {
    public ConcurrentHashMap<String,UserHandler> users =  new ConcurrentHashMap<String,UserHandler>();
    public void showUsers(){
        System.out.println("=======================");
        System.out.println("cout:"+users.size());
        for(Map.Entry<String,UserHandler> e : users.entrySet()){
            System.out.println(e.getValue().getUser());
        }
    }
}
