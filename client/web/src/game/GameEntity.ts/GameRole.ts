import { GameLoop } from "../Game";
import THREE = require("three");
import { CubeGeometry, MeshBasicMaterial, Scene, Vector3, Vector2, ImageLoader, Mesh, Material, MeshLambertMaterial, Texture, PlaneGeometry, Light, AmbientLight, PointLight, ImageUtils, RepeatWrapping, DirectionalLight } from "three";

export class GameRole implements GameLoop {
    id: string = "role";
    scene: Scene;
    constructor(s: Scene) {
        this.scene = s
    }
    update() {

    }
    init() {

    }
    remove() {

    }
}

export class GroudObj extends GameRole {
    constructor(s: Scene) {
        super(s)
        ImageUtils.loadTexture("./res/bg.jpg", undefined, (tex) => {
            tex.wrapS = RepeatWrapping;
            tex.wrapT = RepeatWrapping;
            tex.repeat.set(100, 100)
            let met = new MeshLambertMaterial({ map: tex })
            console.log(tex)
            let cube = new Mesh(
                new CubeGeometry(100, 0.1, 100),
                met
            )
            s.add(cube)
            console.log(cube)
        })
    }
}

enum PlayerState {
    moving,
    inStatic
}
export class GamePlayer extends GameRole {
    state: PlayerState = PlayerState.inStatic
    aimPosition: THREE.Vector3 = new THREE.Vector3();
    mesh: THREE.Mesh;
    speed = 0.01;
    allResLoaded = false;
    constructor(s: Scene) {
        super(s)
        this.mesh = new THREE.Mesh(new CubeGeometry(1, 1, 1), this.getMet())
        this.scene.add(this.mesh)
    }

    getMet() {
        return new MeshBasicMaterial({ color: 0x0000ff })
    }

    init() {

    }
    aimVec = new Vector2()
    update() {
        let disance = this.mesh.position.distanceTo(this.aimPosition)
        if (disance >= 0.1) {
            var dx = this.aimPosition.x - this.mesh.position.x;
            let dy = this.aimPosition.y - this.mesh.position.z
            let yRot = -Math.atan2(dy,dx)
            this.mesh.rotation.y = yRot
            // this.
        } else {
            this.aimPosition = new Vector3(
                Math.random() * 50 + 50,
                0,
                Math.random() * 50 + 50
            )
        }
        let yy = this.mesh.rotation.y

        this.mesh.position.x += Math.cos(yy)*0.01
        this.mesh.position.z += Math.sin(yy)*0.01
    }
}

export class MePlayer extends GamePlayer {
    constructor(s: Scene) {
        super(s)
        let light = new PointLight(0xffffff)
        light.intensity = 0.7

        let lightA = new AmbientLight(0xffffff)
        lightA.intensity = 0.3;

        this.mesh.add(lightA)
        this.mesh.add(light)

        light.position.set(
            this.aimPosition.x,
            this.mesh.position.y + 2,
            this.mesh.position.z
        )
    }
    getMet() {
        return new MeshLambertMaterial({ color: 0x00ff00 })
    }
}

export class EnemyPlayer extends GamePlayer {

}
