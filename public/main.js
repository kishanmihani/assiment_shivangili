/*import { double, name } from './utils.js';

console.log(double(5));
console.log(name);*/
"use strict"
/*class Database {
    constructor(dbName) {
        document.write(`conect with ${dbName} Database<br>`)
    } Insert() {
        document.write("Record Instered<br>");
    } Delete() {
        document.write("Record Delete<br>");
    }
}
let oracle = new Database("Oracle");
oracle.Delete();*/
/*class BaseClass {
    Print() {
        document.write("Base class Print Method <br>");
    }
}
class DerivedClass extends BaseClass {
    Print() {

        super.Print();
        document.write("Drived class Print Method<br>")
    }
}
let obj = new DerivedClass();
obj.Print();*/
class Employee {

    constructor() {
        document.write("Base Class Constructor<br>");
    }
    Print() {
        document.write("Base Class Print Method<br>");
    }
}
class DerviedClass extends Employee {
    constructor() {
        super();
        document.write("Dervied class Constructor<br>");
    }
    Print() {
        super.Print()
        document.write("Dervied class Print Method");

    }
}
let obj = new DerviedClass();
obj.Print();



