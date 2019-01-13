import { GameLoop } from "../Game";
import THREE = require("three");
import { MePlayer, EnemyPlayer, GroudObj } from "../GameEntity.ts/GameRole";

export class ThreeLooper implements GameLoop {
    id: string = "three";
    scene =  new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    camera =  new  THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    players = new Array<EnemyPlayer>()
    mePlayer :MePlayer
    constructor() {
        this.renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(this.renderer.domElement)
        this.mePlayer  = new MePlayer(this.scene)
        this.mePlayer.mesh.add (this.camera)
        this.camera.position.z = this.mePlayer.mesh.position.z +3
        this.camera.position.y = this.mePlayer.mesh.position.y+ 3
        this.camera.rotation.x = -Math.PI/4;
        new GroudObj(this.scene)
    }
    init() {
    };
    update() {
        this.mePlayer.update()
        for(let i =0;i<this.players.length;i++){
            this.players[i].update()
        }
        this.renderer.render(this.scene,this.camera)
    }
    remove() {

    };


 }