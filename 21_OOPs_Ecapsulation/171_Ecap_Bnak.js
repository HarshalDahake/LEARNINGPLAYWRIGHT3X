class ICICI 
{
    #balance;
    constructor(name, balance) 
    {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() 
    {
        return this.#balance;
    }
    setBalance(balance, isCashier) 
    {
        if (isCashier) 
        {
            this.#balance = balance;
        } 
        else 
        {
            console.log("Not allowed")
        }
    }
}

let harshal = new ICICI("Harshal", 1000);
console.log(harshal.getBalance());
harshal.setBalance(10000000, false);
console.log(harshal.getBalance());
console.log("-------------");

let harshal_father = new ICICI("Harshal", 2000);
console.log(harshal_father.getBalance());
harshal_father.setBalance(300000, true);
console.log(harshal_father.getBalance());