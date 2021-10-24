const Intern = require('../lib/Intern');

describe("creating the Intern Object", () => {
    it("should return without error as per user input", () => {
        const intern = new Intern("Mckinley", 1, 'mckinley@gg.com', 'Deakin University');

        expect(intern.name).toEqual(expect.any(String));
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
    });
  });

describe("getSchool", () => {
    it("should return the school name without error as per user input", () => {
        const intern = new Intern("Mckinley", 1, 'mckinley@gg.com', 'Deakin University');

        expect(intern.school).toEqual(expect.any(String));
    });
  });

  describe("getRole", () => {
    it("should return should return intern as role without error as per class without error as per user input", () => {
        const intern = new Intern("Mckinley", 1, 'mckinley@gg.com', 'Deakin University');

        expect(intern.role).toEqual("Intern");
    });
  });