package com.lirunlong.gameSystem;

import java.util.Hashtable;
import java.util.Map;

public class UserManager {
    public Hashtable<String,UserHandler> users =  new Hashtable<>();
    public void showUsers(){
        System.out.println("=======================");
        System.out.println("cout:"+users.size());
        for(Map.Entry<String,UserHandler> e : users.entrySet()){
            System.out.println(e.getValue().getUser());
        }
    }
}
