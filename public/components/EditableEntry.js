import React from "react";
import PropTypes from "prop-types";
import state from "app/state";

const updateEntry = (e, attribute) => {
  const id = e.target.id;
  const value = e.target.value;
  const stateObj = state.get();
  stateObj.entries = stateObj.entries.map(entry => {
    if (parseInt(entry.id) === parseInt(id)) {
      entry[attribute] = value;
      entry.user = state.getUser();
    }
    return entry;
  });
  state.setAll(stateObj);
};

const updateDescription = e => {
  updateEntry(e, "description");
};

const updateTitle = e => {
  updateEntry(e, "title");
};

const remove = id => {
  const stateObj = state.get();
  stateObj.entries = stateObj.entries.filter(entry => {
    return parseInt(entry.id) !== parseInt(id);
  });
  state.setAll(stateObj);
};

const textAreaStyle = {
  width: "100%",
  height: 100,
  background: "#444444",
  color: "white"
};

const inputStyle = {
  marginBottom: 10,
  background: "#444444",
  color: "white"
};

const EditableEntry = props => (
  <div key={props.data.id}>
    <button
      id={props.data.id}
      type="button"
      className="close"
      aria-label="Close"
      onClick={() => {
        remove(props.data.id);
      }}
      style={{ color: "white" }}
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <input
      style={inputStyle}
      id={props.data.id}
      defaultValue={props.data.title}
      onChange={updateTitle}
    />
    <textarea
      id={props.data.id}
      onChange={updateDescription}
      style={textAreaStyle}
      defaultValue={props.data.description || "Add description."}
    />
    <div style={{ textAlign: "right", fontSize: 10, padding: 3 }}>
      Edited by {props.data.user}
    </div>
    <hr />
  </div>
);

EditableEntry.propTypes = {
  data: PropTypes.object.isRequired
};

export default EditableEntry;
