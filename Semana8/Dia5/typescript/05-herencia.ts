class ClaseA{
    constructor(public a:number){

    }
    getA():void{
        console.log(this.a);
    }
}

class ClaseB extends ClaseA{
    constructor(public a:number, public b:number){
        super(a);
    }
}

let objB = new ClaseB(7,8);
objB.getA();