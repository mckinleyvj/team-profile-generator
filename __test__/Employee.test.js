const Employee = require('../lib/Employee');

describe("creating the Employee Object", () => {
    it("should return without error as per user input", () => {
        const employee = new Employee("Mckinley", 1, 'mckinley@gg.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
  });

describe("getName", () => {
    it("should return name without error as per user input", () => {
        const employee = new Employee("Mckinley", 1, 'mckinley@gg.com');

        expect(employee.getName()).toEqual(expect.any(String));
    });
  });

  describe("getId", () => {
    it("should return id without error as per user input", () => {
        const employee = new Employee("Mckinley", 1, 'mckinley@gg.com');

        expect(employee.getId()).toEqual(expect.any(Number));
    });
  });

  describe("getEmail", () => {
    it("should return email without error as per user input", () => {
        const employee = new Employee("Mckinley", 1, 'mckinley@gg.com');

        expect(employee.getEmail()).toEqual(expect.any(String));
    });
  });

  describe("getRole", () => {
    it("should return employee as role without error as per class", () => {
        const employee = new Employee("Mckinley", 1, 'mckinley@gg.com');

        expect(employee.getRole()).toEqual("Employee");
    });
  });