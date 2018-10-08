package com.lirunlong.actor;

public abstract class AbsActor {
    public abstract void recieve(Object mes,ActorRef sender);
    public void send(ActorRef ref,Object mes){

    }
}
