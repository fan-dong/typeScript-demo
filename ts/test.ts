class Student {
    firstName : string;
    lastName : string;
 
    constructor(fiestName : string,  lastName : string) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    greeter() {
        return `Hello,您好${this.firstName}${this.lastName}`;
    }
}
var user = new Student("王","小明");
var ele = document.body || document.documentElement;
ele.innerHTML = user.greeter();
