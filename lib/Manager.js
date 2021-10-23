const Employee = require('./lib/Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    getRole() {
        return "Manager";
    }
}
//     super(area, perimeter); // super is inheriting from Shape.
//     this.sideA = sideA;
//     this.sideB = sideB;
//   }
// const manager = new Manager(12, 9);
// manager.printInfo();

module.exports = Manager;
