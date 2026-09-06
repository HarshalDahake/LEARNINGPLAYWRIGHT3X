class Student 
{
    static collegeName = "PW AT Batch";

    constructor(name) {
        this.name = name;
    }
    // static display() { // Overiding not allowed in Javascript.
    //     console.log(this.name + " are part of the ", Student.collegeName);
    // }
    static display(name) {
        console.log(name + " are part of the ", Student.collegeName);
    }
    nsf(){
        console.log(this.name);
    }
}
let harshal = new Student("Harshal Dahake");
let namita = new Student("Namita Dahake");
let mitansh = new Student("Mitansh Dahake");
let rutuja = new Student("Rutuja Kinhikar");
console.log(Student.collegeName); // call by classname : static
console.log(harshal.name); // call by object : nonStatic
console.log(namita.name);
console.log(mitansh.name);
console.log(Student.collegeName);
console.log("--------------------");
harshal.nsf(); // call by Object : non-static
console.log("--------------------");
Student.display("Harshal"); // call by classname : static

// After function call it print undefined after output beacause both funtion dont have retun;