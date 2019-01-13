import { GameLoop, Game } from "../../Game";
import THREE = require("three");
import { Scene, Mesh, Geometry, SphereGeometry, MeshBasicMaterial, DirectionalLight, MeshStandardMaterial, CubeGeometry, ImageUtils, RepeatWrapping, MeshLambertMaterial, Texture, ShaderMaterial, Color } from "three";
import { debug } from "util";
import { Map } from "../../../util/Map";
import { timingSafeEqual } from "crypto";
import { Vector3 } from "../../../mes/mes";
import { Z_ASCII } from "zlib";

const OrbitControls = require('three-orbitcontrols')

export class BallGames implements GameLoop {
    id: string = "ball game";
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    balls: Array<Ball>;
    fly:Fly;
    debugCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    orbCotr: THREE.OrbitControls;
    static isDebug = false
    static Debug() {
        BallGames.isDebug = !BallGames.isDebug;
    }
    constructor() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.append(this.renderer.domElement)
        var light = new DirectionalLight();
        light.position.set(5, 10, 7.5)
        this.scene.add(light);
        this.balls = new Array<Ball>()

        this.fly =  new Fly(this.scene);

        //loadRes
        var needLoadlist = ["bg.jpg","yan.jpg","yandong.jpg"]
        new TexLoader().load(needLoadlist, (m) => {
            this.onResMapGet(m)
        })

        //buttons
        this.renderer.domElement.addEventListener("touchstart",()=>{ this.onTouched(); })
        this.renderer.domElement.addEventListener("touchend",()=>{ this.onTouchend() })
        this.renderer.domElement.addEventListener("mousedown",()=>{ this.onTouched(); })
        this.renderer.domElement.addEventListener("mouseup",()=>{ this.onTouchend() })

        var head = document.getElementsByTagName('head')[0];
        var url = "./res/css.css"
        var link = document.createElement('link');
        link.type='text/css';
        link.rel = 'stylesheet';
        link.href = url;
        head.appendChild(link);
        
        var view = document.createElement("div");
        view.id = "view"
        view.style.width = window.innerWidth+"px";
        view.innerHTML = `
            <div id = "time"></div>
            <div id ="start" >start</div>
            <div id ="again" >again</div>
        `
        document.body.append(view) 

        var starte = <HTMLElement>document.getElementById("start");
        starte.addEventListener("click",()=>{this.onStartClick()});
        var againe = <HTMLElement>document.getElementById("again");
        againe.addEventListener("click",()=>{this.onAginClicked()});
        againe.style.display="none"
        var timeView = <HTMLElement>document.getElementById("time")
        this.timeElm  = timeView;

        //debug
        this.scene.add(this.debugCamera)
        this.debugCamera.position.set(0, 1, 1);
        console.log(THREE.OrbitControls)
        this.orbCotr = new THREE.OrbitControls(this.debugCamera, this.renderer.domElement)
        var btn = document.createElement("div");
        btn.textContent = "debug"
        document.body.append(btn)
        btn.addEventListener("click", () => {
            BallGames.Debug();
        })
    }
    timeElm : HTMLElement;
    init() {
        this.camera.position.set(0, 0.2, 5);

    };

    onTouched(){
        console.log("touched in")
        if(this.resLoadState == 3){
            this.fly.IsTouch = true;
            this.fly.jump();
        }
        // if(this.resLoadState == 4){
        //     this.onAginClicked();
        // }
        // if(this.resLoadState = 2){
        //     this.onStartClick();
        // }
    }
    onTouchend(){
        console.log("touched out")
        if(this.resLoadState == 3){
            this.fly.IsTouch = false;
        }
    }
    startTime = 0;
    onStartClick(){
        if(this.resLoadState == 2){
            this.resLoadState =3;
            this.fly.start();
        }
        var e = <HTMLElement>document.getElementById("start")
        e.style.display="none"
        this.startTime =  Game.time();
    }

    onAginClicked(){
        var e = <HTMLElement>document.getElementById("again")
        e.style.display="none"
        this.balls.forEach(b =>{
            b.mesh.position.setX( b.getRandomX())
        })
        this.fly.mesh.position.setY(3)
        this.fly.speed = 0;
        this.resLoadState =3;
        this.startTime =  Game.time();
    }

    onDead(){
        this.resLoadState = 4;
        var e = <HTMLElement>document.getElementById("again")
        e.style.display = "block"
    }

    askDead(){
        var isDead = false;
        var pos = {
            x:this.fly.mesh.position.x,
            y:this.fly.mesh.position.y,
            r:0.2
        }
        this.balls.forEach(c =>{
            if(c.mesh.position.distanceTo(this.fly.mesh.position)<0.5){
                isDead = true;
            }
        })

        if(this.fly.mesh.position.y<0.2){
            isDead = true;
        }

        if(isDead){
            this.onDead();
        }

    }

    onResMapGet(ts: Map<Texture>) {
        this.onResLoaded(ts.get("bg.jpg"), ts.get("yan.jpg"))
        this.ShowFire(ts.get("yan.jpg"),ts.get("yandong.jpg"));
    }

    private fires:Array<FireFloor> =  new Array();
    private ShowFire(text: Texture,bgText:Texture) {
        for(var i = 0 ;i<3;i++){
            var shade = new FireFloor(this.scene, text,bgText,(i -1)*10);
            this.fires.push(shade);
        }
    }

    oldTime = 0;
    showTime(){
        var newT =Math.floor((Game.time() -  this.startTime)/1000);
        if(this.oldTime != newT){
            this.oldTime = newT;
            this.timeElm.innerHTML ="时间："+newT;
        }
    }

    private resLoadState = 0; //0 inloading,1,loaded 2,canPlay 3,playing 4 dead;
    onResLoaded(groudText: Texture, ballTex: Texture) {

        for (var i = 0; i < 10; i++) {
            var ball = new Ball(this.scene, ballTex, i * 0.5, 0.3)
            this.balls.push(ball);
        }
        // this.initGroud(groudText);

        this.balls.forEach(b => {
            b.go(5 + 5 * Math.random())
        })
        this.resLoadState = 2;
    }
    update() {
        if (this.resLoadState == 2) {
        }else if(this.resLoadState == 3){
            this.fly.update();
            this.balls.forEach(b => b.update());
            this.moveBg();
            this.askDead();
            this.showTime();
        } else if (this.resLoadState == 0) {

        } else if (this.resLoadState == 1) {

        }
        if(this.resLoadState >=2){
            this.fires.forEach(f =>f.update())
            if (!BallGames.isDebug) {
                this.renderer.render(this.scene, this.camera)
            } else {
                this.renderer.render(this.scene, this.debugCamera)
            }
        }
    }

    private bgMoveSpeed = -5;
    moveBg(){

        var fireFoorx = 999999;
        var leftFire : FireFloor  | undefined;
        var dt = Game.deltTime() /1000
        this.fires.forEach(f => {
            if(f.mesh){
                f.mesh.position.setX(f.mesh.position.x + dt * this.bgMoveSpeed)
            }
            if(f.mesh && f.mesh.position.x < fireFoorx){
                leftFire = f;
                fireFoorx = f.mesh.position.x;
            }
        });
        if(leftFire!=undefined && leftFire.mesh && leftFire.mesh.position.x <=-10){
            leftFire.mesh.position.setX(leftFire.mesh.position.x + 20)
        }
        this.balls.forEach(b =>{
            b.mesh.position.setX(b.mesh.position.x + dt * this.bgMoveSpeed)
            if(b.mesh.position.x <=-10){
                b.mesh.position.setX(b.getRandomX())
            }
        })
    }
    remove() {

    };
    private initGroud(tex: Texture) {
        tex.wrapS = RepeatWrapping;
        tex.wrapT = RepeatWrapping;
        tex.repeat.set(100, 100)
        var g = new CubeGeometry(100, 0.1, 100);
        var mat = new MeshStandardMaterial({
            color: 0xddffdd,
            emissive: 0x888888,
            map: tex
        })
        var mesh = new Mesh(g, mat)
        mesh.position.set(0, 0, 0)
        var m2 = mesh.clone();
        m2.translateZ(-10);
        m2.rotateX(Math.PI / 2);
        this.scene.add(mesh)
        this.scene.add(m2)
    }
}

class Ball implements GameLoop {
    id: string = "ball";
    mesh: Mesh;
    speed: number = 5;
    initSpeed = 0;
    a: number = -9.8;
    r = 0;
    uniform:any;
    rotVec:{x:number,y:number,z:number};
    getRandomX(){
        return 10 + 30 * Math.random();
    }
    constructor(s: Scene, textue: Texture, posX: number = 0, r = 0.1) {
        this.rotVec = {
            x:Math.random() * 10,
            y:Math.random() * 10,
            z:Math.random() * 10
        }

        textue.wrapS = RepeatWrapping;
        textue.wrapT = RepeatWrapping;
        // textue.repeat.set(100, 100)

        var uniformsA = {

            time: { value: 1.0 },
            amplitude: { value: 1.0 },
            color: { value: new THREE.Color(0xff2200) },
            texture: {value:textue},
        };
        this.uniform = uniformsA;
        var vert = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
        `
        var frag = `
            varying vec2 vUv;
            uniform sampler2D texture;
            uniform float time;
            void main(){
                vec2 u1 =  vec2(vUv.x + 0.2 ,(vUv.y + time*1.3));
                vec2 u2 = vec2( vUv.x + time  * 0.1  ,(vUv.y + time));
                vec4 c1 = texture2D( texture, u1 );
                vec4 c2 = texture2D( texture, u2 );
                vec4 c = c1 + c2;
                gl_FragColor = c.bgra;
            }
        `;
        this.r = r;
        var g = new SphereGeometry(r, 10, 10)
        var mat = new ShaderMaterial({
            // color : 0xff0000,
            vertexShader:vert,
            fragmentShader:frag
        })
        this.mesh = new Mesh(g, mat)
        s.add(this.mesh);
        this.mesh.position.set(this.getRandomX(), -0.1, 0)
    }
    state: number = 0; //0 statc; 1 moving
    go(initSpeed: number) {
        this.initSpeed = initSpeed;
        this.speed = initSpeed;
        this.state = 1;
    }
    update() {
        this.uniform.time.value = Game.time()/300000;
        if (this.state == 1) {
            if (this.mesh.position.y > -this.r) {

            } else {
                this.speed = this.initSpeed;
                this.mesh.position.setY(this.r);
            }

            var dt = Game.deltTime() / 1000;
            this.mesh.rotateZ(this.rotVec.z * dt)
            this.mesh.rotateX(this.rotVec.x * dt)
            this.mesh.rotateY(this.rotVec.y * dt)
            this.speed = this.speed + this.a * dt;
            var dy = this.speed * dt;
            this.mesh.position.setY(this.mesh.position.y + dy);
        }

    }
    init() {
    }
    remove() {

    }


}


class TexLoader {
    private loadedMap: Map<Texture> = new Map<Texture>()
    private needLoadNum = 0;
    resPath: string
    constructor(resPath: string = "./res/") {
        this.resPath = resPath
    }
    onLoadOne(name: string, tex: Texture) {
        this.loadedMap.add(name, tex)
        if (this.loadedMap.length() == this.needLoadNum) {
            this.onLoadAllAction(this.loadedMap);
        }
    }
    onLoadAllAction: (ts: Map<Texture>) => void = (t) => { };
    load(li: Array<string>, onLoadAll: (ts: Map<Texture>) => void) {
        this.onLoadAllAction = onLoadAll;
        this.needLoadNum = li.length;
        li.forEach(s => {
            ImageUtils.loadTexture(this.resPath + s, undefined, (tex) => {
                console.log("loaded:" + s);
                this.onLoadOne(s, tex)
            })
        })
    }
}

class FireFloor {
    uniform:any
    constructor(s: Scene, tex: Texture,bgText:Texture,x:number) {
        tex.wrapS = RepeatWrapping;
        tex.wrapT = RepeatWrapping;
        var uniformsA = {

            time: { value: 1.0 },
            amplitude: { value: 1.0 },
            color: { value: new THREE.Color(0xff2200) },
            texture: {value:tex},
        };
        this.uniform = uniformsA;
        var vert = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
        `
        var frag = `
            varying vec2 vUv;
            uniform sampler2D texture;
            uniform float time;
            void main(){
                vec2 u1 =20.0 *  vec2(vUv.x + 0.2 ,(vUv.y + time*1.3));
                vec2 u2 =20.0 * vec2( vUv.x + time  * 0.1  ,(vUv.y + time));
                vec4 c1 = texture2D( texture, u1 );
                vec4 c2 = texture2D( texture, u2 );
                gl_FragColor = c1 + c2;
            }
        `;
        var g = new CubeGeometry(10, 0.1, 10);
        var m = new ShaderMaterial({
            uniforms: this.uniform,
            vertexShader:vert,
            fragmentShader:frag
        });
        var mesh = new Mesh(g, m)
        this.mesh = mesh;
        mesh.position.setY(0);
        mesh.position.setX(x)
        s.add(mesh)

        var bg1 = this.GetBgMesh(bgText,x)
        mesh.add(bg1)
    }
    mesh:Mesh|undefined ;
    update(){
        this.uniform.time.value = Game.time()/300000;
        // console.log("fire")
    }
    private GetBgMesh(text:Texture,x:number){
        
        text.wrapS = RepeatWrapping;
        text.wrapT = RepeatWrapping;
        var g = new CubeGeometry(10, 10, 0.1);
        var mat = new MeshBasicMaterial({
            map:text
        })
        var mesh =  new Mesh(g,mat)
        mesh.position.setX(0)
        // mesh.rotateX(Math.PI /2)
        return mesh;
    }
}


class Fly{
    speed = 0;
    g = -9.8;
    a = 0;
    // touchF =9.8;
    IsTouch =  false;
    jumpSpeed = 5;
    mesh :Mesh ;
    constructor(s:Scene){
        var g = new  SphereGeometry(0.2,10,10)
        var mat = new MeshStandardMaterial({
            color : 0xffffff,
            emissive:0xddffdd
        });
        this.mesh = new Mesh(g,mat)
        this.mesh.position.setY(3)
        this.mesh.position.setX(-1)
        s.add(this.mesh)
    }
    start(){
        this.state = 1;
    }
    state = 0;
    update(){
        if(this.state ==1){
            this.a = this.g;
            // if(this.IsTouch){
            //     this.a = this.touchF;
            // }
            var dt = Game.deltTime()/1000;
            this.speed = this.speed + this.a * dt;
            var dy = this.speed *dt;
            this.mesh.position.setY(this.mesh.position.y + dy);
            if(this.mesh.position.y <= 0){
                this.speed = -this.speed;
            }
        }
    }
    jump(){
        this.speed =  this.jumpSpeed
    }
}