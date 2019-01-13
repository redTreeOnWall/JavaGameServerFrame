import { Map } from "../util/Map"
import { start } from "repl";
import { GameManager } from "./gameManager/GameManager";
import { LatheBufferGeometry } from "three";

export class Game {
    private static instance: Game

    public gameloopMap: Map<GameLoop> = new Map()
    public gameManager: GameManager =  new GameManager()
    
    dtTime = 25;
    static  deltTime(){
        return Game.Ins().dtTime;
    }

    static time(){
        return Game.Ins().lastTime - Game.Ins().startTime;
    }

    public add(l:GameLoop){

        if(this.gameloopMap.has(l.id)){
            throw l.id +"already in map"
        }
        l.init()
        this.gameloopMap.add(l.id,l)
    }

    public remove(l:GameLoop){
        l.remove()
        return this.gameloopMap.remove(l.id);
    }

    public static Ins() {
        if (Game.instance == null) {
            Game.instance = new Game()
        }
        return Game.instance
    }

    public start() {
        this.lastTime = new Date().getTime() - 25;
        this.startTime = this.lastTime;
        this.updata()
    }

    private lastTime =0;
    private startTime = 0;
    private updata() {
        var newTime = new Date().getTime()
        this.dtTime = newTime - this.lastTime;
        this.lastTime = newTime;
        Game.Ins().gameloopMap.forEach((k,v) =>{
            v.update()
        })
        requestAnimationFrame(()=>{
            Game.Ins().updata()
        })
    }
}

export interface GameLoop {
    id: string
    update:()=>void
    init:()=>void
    remove:()=> void
}
