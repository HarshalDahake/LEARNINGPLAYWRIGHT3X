// Interface are used in API Testing
// ? means optional in nature.
interface APIResponse{
    statuscode:number;
    body: string;
    headers?: object;
    responseTime: number;
}

let responseData: APIResponse = {
    statuscode:200,
    body: "{}",
    responseTime: 200
}

console.log("Status:", responseData.statuscode);
console.log("Body:", responseData.body);
console.log("response Time:", responseData.responseTime);
console.log("Headers:", responseData.headers); // undefined
console.log("----------------");

let responseData2: APIResponse = {
    statuscode:200,
    body: "{}",
    headers: {},
    responseTime: 200
}
console.log("Status:", responseData2.statuscode);
console.log("Body:", responseData2.body);
console.log("Headers:", responseData2.headers);
console.log("Response Time:", responseData2.responseTime);