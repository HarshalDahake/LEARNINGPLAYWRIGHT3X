function doubleMe(a)
{
    return a*2;
}
console.log("doubleMe = ", doubleMe(20));

const doubtA = (a)=> a*2;
console.log("doubtA = ", doubtA(10));

const getEnv = () => "staging";
console.log("getEnv = ", getEnv());

//Mutiline Arrow Funtion
const getResult = (score) => {
    if(score > 70) return "Pass";
    return "fail";
}

console.log("getResult = ", getResult(78));
console.log("getResult = ", getResult(43));