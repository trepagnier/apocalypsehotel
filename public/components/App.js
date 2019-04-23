import React from "react";
import Router from "app/components/Router";
import state from "app/state";
import api from "app/api/api";

export default class App extends React.Component {
  constructor() {
    super();

    /*
      The `state` module is the single source of truth for all stateful data.
      When it gets updated, an event is published that is received here in
      the `App` component. App then propogates the changes down to its children.
     */

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
