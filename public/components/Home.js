import React from "react";
import PropTypes from "prop-types";
import SearchBar from "app/components/SearchBar";
import Map from "app/components/Map";
import LocationSummary from "app/components/LocationSummary";

const Home = props => (
  <div>
    <Map appState={props.appState} />
    <SearchBar />
    <LocationSummary appState={props.appState} />
  </div>
);

Home.propTypes = {
  appState: PropTypes.object.isRequired
};

export default Home;
