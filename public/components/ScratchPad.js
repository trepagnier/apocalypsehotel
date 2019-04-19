import React from "react";
import PropTypes from "prop-types";
import getData from "app/functions/getData";
import api from "app/api/api";

const doWork = () =>
  new Promise(res => {
    api.getCityMetaData("new orleans").then(data => {
      res(data);
    });
  });

export default class ScratchPad extends React.Component {
  static propTypes = {
    appState: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.appState = props.appState;
    this.state = {
      result: "No results to display."
    };
  }

  showWork = () => {
    doWork().then(res => {
      this.setState({
        result: res || this.state.result
      });
    });
  };

  componentDidMount() {
    this.showWork();
  }

  render() {
    return (
      <div>
        <h2>Scratch Pad</h2>
        <br />
        {this.state.result}
      </div>
    );
  }
}
