import getData from "app/functions/getNoCorsData";
import getQueryUrl from "app/functions/getQueryUrl";
import getCityMetaDataQuery from "app/api/helpers/getCityMetaDataQuery";

const host = "https://www.roomkey.com/";

const api = {
  search: input =>
    new Promise(res => {
      getData(getQueryUrl(host, "autofill", { query: input })).then(data => {
        res(data.locations);
      });
    }),

  getCityId: city =>
    new Promise(res => {
      getData(getQueryUrl(host, "autofill", { query: city })).then(data => {
        res(data.locations[0].id);
      });
    }),

  getCityMetaDataById: id =>
    new Promise(res => {
      const metadataQuery = getCityMetaDataQuery(id);
      getData(`${host}${metadataQuery}`).then(data => {
        res(data);
      });
    }),

  getCityMetaDataByName: city => {
    return new Promise(res => {
      api
        .getCityId(city)
        .then(getCityMetaDataById)
        .then(data => res(data));
    });
  }
};

export default api;
