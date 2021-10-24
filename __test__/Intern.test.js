const Intern = require('../lib/Intern');

describe("getSchool", () => {
    it("should return this.school as received from input", () => {
        const intern = new Intern("Mckinley", 1, 'mckinley@gg.com', 'Deakin University');

        expect(intern.school).toEqual("Deakin University");
    });
  });

  describe("getRole", () => {
    it("should return this.role as received from input", () => {
        const intern = new Intern("Mckinley", 1, 'mckinley@gg.com', 'Deakin University');

        expect(intern.role).toEqual("Intern");
    });
  });