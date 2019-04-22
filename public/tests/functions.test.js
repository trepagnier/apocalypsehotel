import capitalize from "app/functions/capitalize";
import getQueryUrl from "app/functions/getQueryUrl";

describe("functions", () => {
  describe("capitalize", () => {
    it("should capitalize the first letter of the provided string", () => {
      expect(capitalize("test")).toBe("Test");
    });
  });

  describe("getQueryUrl", () => {
    it("should construct a query url from a param object", () => {
      expect(
        getQueryUrl("test.com", "/data", { param1: "test1", param2: "test2" })
      ).toBe("test.com/data?param1=test1&param2=test2");
    });
  });
});
