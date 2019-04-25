import api from "app/api/api";
import getLocationSummary from "app/functions/getLocationSummary";
import capitalize from "app/functions/capitalize";
import isUSState from "app/functions/isUSState";

// @TODO: Find a better solution. Include regions for US but not international
// cities.
function getLocationString(name, region) {
  if (!isUSState(region)) return name;
  return `${name}%2C_${capitalize(region)}`;
}

export default locationId =>
  new Promise(res => {
    const locationData = {
      locationSummary: "",
      coords: []
    };
    api
      .getCityMetaDataById(locationId)
      .then(metadata => {
        locationData.coords = [metadata.lat, metadata.lng];
        return getLocationSummary(
          getLocationString(metadata.name, metadata.region_name),
          metadata.hotel_count
        );
      })
      .then(summary => {
        locationData.locationSummary = summary;
        res(locationData);
      });
  });
