

export class Map<T>{
    public map: { [key: string]: T } = {}
    public add(k: string, v: T) {
        this.map[k] = v
    }
    public remove(k: string) {
        return delete this.map[k]
    }

    public get(k: string) {
        return this.map[k]
    }
    public length() {
        return Object.keys(this.map).length
    }

    public has(key:string){
        return key in this.map
    }

    public forEach(f: { (key: string, val: T): void }) {
        for (let k in this.map) {
            f(k, this.map[k]);
        }
    }
}