class Browser 
{
    constructor(name) 
    {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }
    startBrowser() 
    {
        console.log("starting the browser", this.name);
    }
    closeBrowser() 
    {
        console.log("Closing the browser", this.name);
    }
}
let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");
console.log(chrome.isOpen);
chrome.startBrowser();
chrome.closeBrowser();