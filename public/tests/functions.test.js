import capitalize from "app/functions/capitalize";
import getQueryUrl from "app/functions/getQueryUrl";
import getWikiSummary from "app/functions/getWikiSummary";
import getNoCorsData from "app/functions/getNoCorsData";
import getData from "app/functions/getData";
import getLocationSummary from "app/functions/getLocationSummary";
import fetchMock from "fetch-mock";

import "es6-promise";
import "isomorphic-fetch";

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

  describe("getNoCorsData", () => {
    it("should proxy the request to Roomkey's API and return the expected result", done => {
      getNoCorsData(
        getQueryUrl("https://www.roomkey.com/", "autofill", {
          query: "New Orleans"
        })
      ).then(data => {
        expect(data.locations[0].id).to.not.equal(null);
        expect(data.locations[0].id).to.not.equal(undefined);
        done();
      });
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

  describe("getLocationSummary", () => {
    it("should return the Wikipedia summary in the past tense", done => {
      fetchMock.once(
        "https://en.wikipedia.org/api/rest_v1/page/summary/Test%20City?redirect=true",
        {
          type: "ok",
          extract: "This is a summary."
        }
      );

      getLocationSummary("Test City", 20).then(data => {
        expect(data.description.split("<br>")[0]).to.equal(
          `This was a summary.`
        );
        done();
      });
    });

    it("should return a description containing the city name and number of encampments if the request returns a disambiguation", done => {
      fetchMock.once(
        "https://en.wikipedia.org/api/rest_v1/page/summary/New%20Orleans?redirect=true",
        {
          type: "disambiguation"
        }
      );

      getLocationSummary("New Orleans", 20).then(data => {
        expect(data.description).to.equal(
          `There are 20 encampments located in the locality once called "New Orleans".`
        );
        done();
      });
    });
  });
});
