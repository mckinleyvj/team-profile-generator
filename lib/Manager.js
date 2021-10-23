const Employee = require('./Employee');

class Manager extends Employee{
    constructor (name, id, email, officePhone) {

        super(name,id,email);
        this.officePhone = officePhone;
        this.role = "Manager";
    }
    
    getRole() {
        return this.role;
    }
}

module.exports = Manager;
