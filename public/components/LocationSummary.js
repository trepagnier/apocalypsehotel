import React from "react";
import PropTypes from "prop-types";
import appState from "app/state";

const LocationSummary = props => (
  <div className="container">
    <div style={{ marginTop: 50 }}>
      <h3>{appState.get("locationSummary").title}</h3>

      <div
        dangerouslySetInnerHTML={{
          __html: appState.get("locationSummary").description
        }}
      />
    </div>
  </div>
);

LocationSummary.propTypes = {
  appState: PropTypes.object.isRequired
};

export default LocationSummary;
