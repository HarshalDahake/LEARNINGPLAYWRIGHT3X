interface BasePage{
    url: string;
    title: string;
}
interface LoginPage extends BasePage {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}
interface FreeTrailPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}

let loginPage: LoginPage = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"
}

console.log("URL:", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username field:", loginPage.usernameSelector);
console.log("Password field:", loginPage.passwordSelector);
console.log("Login button:", loginPage.loginButtonSelector);
console.log("-----------------------------");

let freeTrialPage: FreeTrailPage = {
    url: "/free-trial",
    title: "Free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit",
}

console.log("URL:", freeTrialPage.url);
console.log("Title:", freeTrialPage.title);
console.log("Username field:", freeTrialPage.usernameSelector);
console.log("Submit button:", freeTrialPage.submitButtonSelector);

// LoginPage and FreeTrialPage completely hides the BasePage interface
// -  Abstration is achieved.