import { Map } from "../util/Map"
import { start } from "repl";
import { GameManager } from "./gameManager/GameManager";

export class Game {
    private static instance: Game

    public gameloopMap: Map<GameLoop> = new Map()
    public gameManager: GameManager =  new GameManager()

    time = {
        deltTime:25
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
        this.updata()
    }

    private updata() {
        Game.Ins().gameloopMap.forEach((k,v) =>{
            v.update()
        })
        requestAnimationFrame(Game.Ins().updata)
    }
}

export interface GameLoop {
    id: string
    update:()=>void
    init:()=>void
    remove:()=> void
}
