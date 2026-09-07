abstract class BaseTest{
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
    abstract loan(): void;
    
    loan1(): void {
        console.log("Hi");
    }
}

class UITest extends BaseTest {
    setup(): void {
        console.log("  Setup: launch browser");
    }
    execute(): void {
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log("  Teardown: close browser");
    }
    loan(): void {
        console.log("  GIVE LOAN");
    }
}

let test = new UITest("Login Test");
test.setup();
test.execute();
test.teardown();
test.loan();
test.loan1();

// Abstarct class cannot be instantiated directly
// Abstarct class can have complete as well as incomplete methods
// Abstract class can have constructors
