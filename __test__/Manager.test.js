const Manager = require('../lib/Manager');

describe("creating the Manager Object", () => {
    it("should return without error as per user input", () => {
        const manager = new Manager("Mckinley", 1, 'mckinley@gg.com', '041555555');

        expect(manager.name).toEqual(expect.any(String));
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.officePhone).toEqual(expect.any(Number));
    });
  });

  describe("getRole", () => {
    it("should return should return engineer as role without error as per class without error as per user input", () => {
        const manager = new Manager("Mckinley", 1, 'mckinley@gg.com', '041555555');

        expect(manager.role).toEqual("Manager");
    });
  });