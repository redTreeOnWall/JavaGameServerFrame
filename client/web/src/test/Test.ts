import { MesId } from "../mes/mes";
import { debug } from "util";
import { NetConnecter } from "../net/NetConnecter";

export class Test{
    public static TestMsgIdSize(){
        return;
        var mes = MesId.m_C_Login;

        var buf = new ArrayBuffer(2);
        var view =  new Int16Array(buf);
        view[0] = 32767;

        console .log(buf);

        NetConnecter.ins().AddConnectListener(()=>{
            console.log("connnected");
            NetConnecter.ins().ws.send(buf);
        })

    }
}