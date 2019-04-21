import React from "react";
import PropTypes from "prop-types";
import getData from "app/functions/getData";
import api from "app/api/api";
import PubSub from "pubsub-js";
import L from "leaflet";
import appState from "app/state";

const style = {
  marginTop: 20,
  height: 200
};

class Map extends React.Component {
  componentDidUpdate = () => {
    const coords = appState.get("coords");
    this.map.panTo(new L.LatLng(coords[0], coords[1]));
  };

  componentDidMount = () => {
    this.map = L.map("map").setView(appState.get("coords"), 13);
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    ).addTo(this.map);
  };

  render() {
    return <div style={style} id="map" />;
  }
}

Map.propTypes = {
  appState: PropTypes.object.isRequired
};

export default Map;
