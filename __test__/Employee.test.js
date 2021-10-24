const Employee = require('../lib/Employee');

describe("getName", () => {
    it("should return this.name as received from input", () => {
        const employee = new Employee("Mckinley", 1, 'mckinley@gg.com');

        expect(employee.name).toEqual("Mckinley");
    });
  });

  describe("getId", () => {
    it("should return this.id as received from input", () => {
        const employee = new Employee("Mckinley", 1, 'mckinley@gg.com');

        expect(employee.id).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return this.email as received from input", () => {
        const employee = new Employee("Mckinley", 1, 'mckinley@gg.com');

        expect(employee.email).toEqual("mckinley@gg.com");
    });
  });

  describe("getRole", () => {
    it("should return this.role as received from input", () => {
        const employee = new Employee("Mckinley", 1, 'mckinley@gg.com');

        expect(employee.role).toEqual("Employee");
    });
  });