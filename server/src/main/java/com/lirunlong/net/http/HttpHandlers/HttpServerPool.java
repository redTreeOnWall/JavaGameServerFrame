package com.lirunlong.net.http.HttpHandlers;

import com.lirunlong.thread.ThreadPool;

public class HttpServerPool {
    private static volatile ThreadPool pool = null;
    public static ThreadPool getPool(){
            if(pool == null){
                pool = new ThreadPool(10,10000);
            }
        return pool;
    }
}
