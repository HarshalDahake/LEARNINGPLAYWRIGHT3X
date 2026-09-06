class Environment 
{
  constructor(name = "staging", port = 3000) 
  {
    this.name = name;
    this.port = port;
  }
  getURL() 
  {
    return "http://" + this.name + ":" + this.port;
  }
}
let env1 = new Environment();// uses default values
let env2 = new Environment("production", 8080); // uses provided values
console.log(env1.getURL());
console.log(env2.getURL());