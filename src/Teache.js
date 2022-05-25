
function Teaches () {

    this.name = 'Joy Sarker';
    this.age  = 30;
    this.skill = 'MERN Stack';

    this.agcCal = function () {
        return ` My name is ${ this.name }`;
    }

}


export default Teaches;