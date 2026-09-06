interface Calculator{
    add(a:number,b:number):number;
    subtract(a: number, b: number): number;
} // Rules

const calc: Calculator = {
    add: (a,b) => a+b,
    subtract: (a, b) => a - b,
}// Enforcement of rules

const calc2: Calculator = {
    add: (a,b) => a+b,
    subtract: (a, b) => a - b,
}

const calc3: Calculator = {
    add(a,b){
        return a+b;
    },
    subtract(a, b){
        return a - b;
    }
}

console.log(calc.add(3,4)); // Uses
console.log(calc2.add(5,10));
console.log(calc3.add(100,21));    
console.log(calc.subtract(101,50)); // Uses
console.log(calc2.subtract(5,10));
console.log(calc3.subtract(100,4));

interface India{
    standUpNationalAnthem(a:string):string;
}

const harsh:India = {
    standUpNationalAnthem: (a) =>  "Jan Gan Man Adhinay"
}
console.log(harsh.standUpNationalAnthem("India"));