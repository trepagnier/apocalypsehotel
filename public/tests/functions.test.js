import capitalize from "app/functions/capitalize";
import getQueryUrl from "app/functions/getQueryUrl";
import getWikiSummary from "app/functions/getWikiSummary";

import "es6-promise";
import "isomorphic-fetch";

let request = null;

describe("functions", () => {
  describe("capitalize", () => {
    it("should capitalize the first letter of the provided string", () => {
      expect(capitalize("test")).to.equal("Test");
    });
  });

  describe("getQueryUrl", () => {
    it("should construct a query url from a param object", () => {
      expect(
        getQueryUrl("test.com", "/data", { param1: "test1", param2: "test2" })
      ).to.equal("test.com/data?param1=test1&param2=test2");
    });
  });

  describe("getWikiSummary", () => {
    it("should return an object with a `title` property", done => {
      getWikiSummary("New Orleans").then(data => {
        expect(data.title).to.not.equal(null);
        expect(data.title).to.not.equal(undefined);
        done();
      });
    });
  });
});
