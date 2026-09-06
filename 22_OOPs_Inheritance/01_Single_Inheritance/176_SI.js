class BasePage 
{
    constructor(pageName) {
        this.pageName = pageName;
    }
    open() {
        console.log("Opening the page: " + this.pageName);
    }
    close() {
        console.log("Closing the page: " + this.pageName);
    }

}
class LoginPage extends BasePage {
}

let page = new LoginPage("Login Page");
page.open();
page.close();