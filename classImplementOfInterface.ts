import { hasPrint } from "./Interface";

export class Invoice implements hasPrint{
    constructor(
        public name:string,
        private age: number,
        readonly male: string
    ){}
    print(){
        console.log(`${this.name} - ${this.age} - ${this.male}`)
    }
}

export class Payment implements hasPrint{
    constructor(
        public huhu:string,
        private donha: number,
        public malesss: boolean
    ){}
    print(){
        console.log(`${this.huhu} - ${this.donha} - ${this.malesss}`)
    }
}
