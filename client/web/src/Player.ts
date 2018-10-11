export class Player{
    name:string
    constructor(name:string){
        this.name = name
    }
    say(s:string){
        console.log(this.name + " say:" + s)
    }
}