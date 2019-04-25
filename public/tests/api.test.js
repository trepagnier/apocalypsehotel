import api from "app/api/api";

import "es6-promise";
import "isomorphic-fetch";

let request = null;

describe("api", () => {
  describe("search", () => {
    it("should return locations", done => {
      api.search("chicago").then(locations => {
        expect(locations[0].name).to.equal("Chicago, Illinois, United States");
        done();
      });
    });
  });

  describe("getCityId", () => {
    it("should return an ID associated with the city name provided", done => {
      api.getCityId("chicago").then(id => {
        expect(id).to.equal("0gyue0G4S04s5cO05g9krVMw");
        done();
      });
    });
  });

  describe("getCityMetaDataById", () => {
    it("should return metadata associated with the city ID provided", done => {
      api.getCityMetaDataById("0gyue0G4S04s5cO05g9krVMw").then(metadata => {
        expect(metadata.full_name).to.equal("Chicago, Illinois, United States");
        done();
      });
    });
  });
});
