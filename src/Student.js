import Staff from "./Staff.js";

export class Student extends Staff {

    constructor(name,age,skill){
        super(name,age,skill);
       

    }

    goal(){
        return` my goal is full-stack web developer in the the javascript MERN Freamwork `;
    }
}
