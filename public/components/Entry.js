import React from "react";
import PropTypes from "prop-types";
import state from "app/state";

const Entry = props => (
  <div key={props.data.id}>
    <h4>{props.data.title}</h4>
    <p>{props.data.description}</p>
    <div style={{ textAlign: "right", fontSize: 10, padding: 3 }}>
      Edited by {props.data.user}
    </div>
    <hr />
  </div>
);

Entry.propTypes = {
  data: PropTypes.object.isRequired
};

export default Entry;
