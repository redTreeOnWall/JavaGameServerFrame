import { Game } from "./game/Game";
import { NetConnecter } from "./net/NetConnecter";
import { Msg, MesId, Ping, C_Login } from "./mes/mes";
import { PingLooper } from "./game/GameLoops/PingLooper";
import { ThreeLooper } from "./game/GameLoops/ThreeLoop";
import { Test } from "./test/Test";
import { BallGames } from "./game/GameLoops/games/BallGames";


// Test.TestMsgIdSize();
var vi = ()=>{
    BallGames.Debug()
}

console.log(vi)

var game = Game.Ins()
game.start();
game.add(new BallGames());
/*
var net = NetConnecter.ins()

let onLogin = ()=>{
    game.add(new PingLooper())
    // game.add(new ThreeLooper())
    game.add(new BallGames());
}

net.AddConnectListener(() => {
    game.start();

    net.addMesListener({
        mesId: MesId.m_S_Login,
        action :(m)=>{
            if(m.sLogin && m.sLogin.isSuc == 1){
                console.log("登陆成功")
                onLogin()
            }else{
                console.log("登陆失败")
            }
        }
    })

    let loginmes = new Msg()
    loginmes.mesId = MesId.m_C_Login;
    loginmes.cLogin = new C_Login();
    let login = new C_Login()
    login.userName = Math.random().toString()
    loginmes.cLogin = login
    NetConnecter.ins().send(loginmes)
})

*/