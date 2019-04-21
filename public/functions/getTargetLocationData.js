import api from "app/api/api";
import getLocationSummary from "app/functions/getLocationSummary";
import capitalize from "app/functions/capitalize";

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
          `${metadata.name}%2C_${capitalize(metadata.region_name)}`,
          metadata.hotel_count
        );
      })
      .then(summary => {
        locationData.locationSummary = summary;
        res(locationData);
      });
  });
