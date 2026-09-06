class BaseTest 
{
    setup() 
    {
        console.log("Base: open browser");
    }
}
class APITest extends BaseTest 
{
    setup() 
    {
        console.log("APITest: open browser");
    }
}

let test = new APITest();
test.setup();

let baseObj = new BaseTest();
baseObj.setup();

/*
- If child class has the same method as parent class, 
then child class method will be executed. 
This is called Method Overriding.
*/