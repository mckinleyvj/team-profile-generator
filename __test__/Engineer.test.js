const Engineer = require('../lib/Engineer');

describe("creating the Engineer Object", () => {
    it("should return without error as per user input", () => {
        const engineer = new Engineer("Mckinley", 1, 'mckinley@gg.com', 'mckinleyvj');

        expect(engineer.name).toEqual(expect.any(String));
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.any(String));
        expect(engineer.github).toEqual(expect.any(String));
    });
  });

describe("getGitHub", () => {
    it("should return github username without error as per user input", () => {
        const engineer = new Engineer("Mckinley", 1, 'mckinley@gg.com', 'mckinleyvj');

        expect(engineer.github).toEqual(expect.any(String));
    });
  });

  describe("getRole", () => {
    it("should return should return engineer as role without error as per class without error as per user input", () => {
        const engineer = new Engineer("Mckinley", 1, 'mckinley@gg.com', 'mckinleyvj');

        expect(engineer.role).toEqual("Engineer");
    });
  });