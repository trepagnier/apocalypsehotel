import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import PubSub from "pubsub-js";
import api from "app/api/api";
import getLocationSummary from "app/functions/getLocationSummary";
import $ from "jquery";
import appState from "app/state";
import capitalize from "app/functions/capitalize";
import getTargetLocationData from "app/functions/getTargetLocationData";
import resolveSearchString from "app/functions/resolveSearchString";
import "react-bootstrap-typeahead/css/Typeahead.css";

const style = {
  paddingBottom: 0
};

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      options: []
    };
  }
  updateSearch = e => {
    // @TODO: `e` can either be a string or an object. Bad! Create a click
    // handler for both types and pass the resolved string to this function
    const searchString = resolveSearchString(e);
    if (!searchString) return;
    api.search(searchString).then(locations => {
      if (!locations[0]) return;

      // Populate predictive search dropdown if there are more than 1 results
      if (locations.length > 1) {
        this.setState({
          options: locations.map(city => city.name)
        });
        return;
      }

      // If there's only one result, assume it's the search target and proceed
      if (locations[0].id) {
        getTargetLocationData(locations[0].id).then(data => {
          appState.extend(data);
        });
        return;
      }
    });
  };
  onWrapperClick = e => {
    setTimeout(() => {
      const target = $(".rbt-input-main")[0];
      if (!target.value) return;
      this.updateSearch(target.value);
    }, 20);
  };
  render() {
    return (
      <div onClick={this.onWrapperClick}>
        <Typeahead
          id="typeahead"
          options={this.state.options}
          labelKey="name"
          onInputChange={this.updateSearch}
          onKeyDown={this.updateSearch}
          onBlur={this.updateSearch}
          placeholder="Search by city..."
        />
      </div>
    );
  }
}
