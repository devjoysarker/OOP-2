// import Staff from "./src/Staff.js";
// import { Student } from "./src/Student.js";




// let stu = new Student('Joy',200, 'Java');

// let staff  = new Staff('Ananda',100,'payton');
// let staff2 = new Staff('Joy',100,'payton');

// console.log(staff.currencyConvert());
// console.log(stu);



// part-4
import Teaches from "./src/Teache.js";
Teaches.prototype.getDeveloper = function(){
    return `All developer are here `;
}

Teaches.prototype.deleteUser = function () {

    return this.getDeveloper();
}
 
let tea =  new Teaches;
console.log(tea.deleteUser());
 