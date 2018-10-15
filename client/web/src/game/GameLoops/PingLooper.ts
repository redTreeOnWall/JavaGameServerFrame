import { GameLoop } from "../Game";
import { Msg, MesId, Ping } from "../../mes/mes";
import { NetConnecter } from "../../net/NetConnecter";

export class PingLooper implements GameLoop{
    id: string = "ping"
    lastSendTime = 0
    lastRecieveTime = 0
    inPing = false
    update(){
        let t = this.getTime()
        if(!this.inPing ){ 
            this.ping()
        }
        return;
        if(!this.inPing && t - this.lastSendTime >= 3000){ 
            this.ping()
        }
    }
    init(){
        NetConnecter.ins().addMesListener({
            mesId : MesId.m_Ping,
            action:(m)=>{
                this.onPong()
            }
        })
    }
    remove(){

    }
    ping(){
        this.inPing = true
        let mes =  new Msg()
        mes.mesId = MesId.m_Ping
        mes.ping = new Ping()
        NetConnecter.ins().send(mes)
        this.lastSendTime = this.getTime()
    }

    onPong(){
        let t = this.getTime()
        this.lastRecieveTime = t
        let time = t - this.lastSendTime
        console.log("ping:"+time)
        this.inPing = false
    }

    getTime(){
        return new Date().getTime()
    }
}