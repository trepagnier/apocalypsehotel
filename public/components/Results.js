import React from "react";
import PropTypes from "prop-types";
import state from "app/state";
import AddEntry from "app/components/AddEntry";
import EditableEntry from "app/components/EditableEntry";
import Entry from "app/components/Entry";
import authenticated from "app/functions/authenticated";

function maybeAddButton() {
  if (authenticated()) {
    return <AddEntry />;
  }
}

function Results(props) {
  function getEntries() {
    if (state.getUser() !== "anonymous") {
      return props.appState.entries.map((result, i) => {
        return <EditableEntry key={result.id} data={result} />;
      });
    }
    return props.appState.entries.map((result, i) => {
      return <Entry key={result.id} data={result} />;
    });
  }

  return (
    <div>
      {getEntries()}
      {maybeAddButton()}
    </div>
  );
}

Results.propTypes = {
  appState: PropTypes.object
};

export default Results;
