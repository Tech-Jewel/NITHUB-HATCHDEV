

// ASSIGNMENT
// 1. push
// let colours: string[] = ["red", "blue", "green"];
// colours.push("purple");
// console.log(colours);



// // 2. pop
// let nums: number[] = [1, 2, 3];
// nums.pop();
// console.log(nums);

class Engine{
    start() {
        console.log("Engine Started!");
    }
}

class Carz{
    engine: Engine

    constructor(engine: Engine) {
        this.engine = engine;
    }

    startCar() {
        console.log("Car started!");
        this.engine.start();
    }
}

const engine = new Engine();
const car = new Carz(engine);

// ABSTRACTION
