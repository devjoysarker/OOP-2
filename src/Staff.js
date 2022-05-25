
 class Staff {
     constructor(name,age,skill){
         this.name = name,
         this.age  = age,
         this.skill = skill

         this.ageCal = function() {
             return `hi ${ this.name } your ${ this.age } Years old and your Skill
             ${this.skill}`;

         }

     }
     currencyConvert() {
        return `We love Dollar`;
    }
}
 export default Staff;