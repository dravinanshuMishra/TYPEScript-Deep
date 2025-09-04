// step:1. Decorators ka use hum log kisi bhi class ya class ke andar property ya method ka naam get karne ke liye karte hai.
function decorators(constructor: Function) {
  console.log("Class Name:", constructor.name);
}

// step: 2. How to use decorators.
// class ka naam get karne ke liye class ke upar likhe class ke nadar ke get karne ke liye class ke andar likhe.
@decorators
class CustomClass {
    x: number;
    y: number;

    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
}

const obj = new CustomClass(10,20);
console.log("Object:", obj);
