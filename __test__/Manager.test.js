const Manager = require('../lib/Manager');

  describe("getRole", () => {
    it("should return this.role as received from input", () => {
        const manager = new Manager("Mckinley", 1, 'mckinley@gg.com', '041555555');

        expect(manager.role).toEqual("Manager");
    });
  });