const Engineer = require('../lib/Engineer');

describe("getGitHub", () => {
    it("should return this.github as received from input", () => {
        const engineer = new Engineer("Mckinley", 1, 'mckinley@gg.com', 'mckinleyvj');

        expect(engineer.github).toEqual("mckinleyvj");
    });
  });

  describe("getRole", () => {
    it("should return this.role as received from input", () => {
        const engineer = new Engineer("Mckinley", 1, 'mckinley@gg.com', 'mckinleyvj');

        expect(engineer.role).toEqual("Engineer");
    });
  });