import React from "react";
import Router from "app/components/Router";
import state from "app/state";
import api from "app/api/api";

export default class App extends React.Component {
  constructor() {
    super();

    // wake up proxy server
    api.search("new orleans");

    PubSub.subscribe("updateState", () => {
      this.setState({
        appState: state.get()
      });
    });

    this.state = {
      appState: state.get()
    };
  }
  render = () => {
    return (
      <div>
        <Router appState={this.state.appState} />
      </div>
    );
  };
}
