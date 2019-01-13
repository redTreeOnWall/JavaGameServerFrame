import { debug } from "util";
import { Msg, MesId } from "../mes/mes";
import { Map } from "../util/Map";
import { listenerCount } from "cluster";

export class NetConnecter{
    private static instance:NetConnecter;
    private onConnectListeners:Array<()=>void> = new Array()
    private onMesGetListeners : Map<Array<MesListener>> = new Map()
    public static ins(){
        if(NetConnecter.instance == undefined){
            NetConnecter.instance = new NetConnecter("ws://localhost:5050")
        }
        return NetConnecter.instance;
    }

    public AddConnectListener(lis:()=>void){
        this.onConnectListeners.push(lis)
    }

    public addMesListener(lis:MesListener){
        if(!this.onMesGetListeners.has(lis.mesId.toString())){
            this.onMesGetListeners.add(lis.mesId.toString(),new Array<MesListener>())
        }
        this.onMesGetListeners.get(lis.mesId.toString()).push(lis)
    }
    public removeMesListener(lis:MesListener){
        let key = lis.mesId.toString()
        if(this.onMesGetListeners.has(key)){
            let li = this.onMesGetListeners.get(key)
            let deleteIndex = -1;
            for(let i = 0;i<li.length;i++){
                if(li[i] == lis){ 
                    deleteIndex = i
                }
            }
            if(deleteIndex!=-1){
                li.splice(deleteIndex,1)
            }
        }
    }

    private isConnected = false

    public ws:WebSocket;
    private url:string;
    constructor(addr:string){
        this.url = addr
        this.ws =this.connect()
    }

    private connect(){
        this.ws = new WebSocket(this.url)
        this.ws.onerror = (e) => { 
            console.error(e)
        }
        this.ws.onopen = ()=>{
            console.log("网络连接成功")
            this.isConnected =  true
            this.onConnectListeners.forEach(lis => lis())
        }
        this.ws.onclose = () =>{
            console.log("断开连接 3秒后重新连接")
            this.isConnected = false
            setTimeout(this.connect,3000)
        }
        this.ws.onmessage =(e) =>{
            //TODO:性能优化
            var reader = new FileReader()
            reader.readAsArrayBuffer(e.data)
            reader.onloadend =()=>{
                let res = reader.result;
                let mes = Msg.decode(new Uint8Array(<ArrayBuffer>res))
                this.onMes(mes)
            }
        }
        return this.ws
    }

    private onMes(mes:Msg){
        console.warn("↓ recieve:")
        console.warn(mes)
        let ls = this.onMesGetListeners;
        let key = mes.mesId.toString()
        if(ls.has(key)){
            ls.get(key).forEach(l =>{
                l.action(mes)
            })
        }
    }

    public send(msg:Msg){
        if(!this.isConnected){
            console.error("在连接尚未建立之前尝试发送消息")
            return;
        }
        console.warn("↑ seding:")
        console.warn(msg)
        this.ws.send(Msg.encode(msg).finish())
    }
}

export interface MesListener{
    mesId:MesId,
    action:(msg:Msg) => void
}