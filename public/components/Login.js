import React from "react";
import postData from "app/functions/postData";
import state from "app/state";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      authenticated: false
    };
  }
  style = { right: 10, position: "absolute", color: "#969696" };
  inputStyle = { width: 100 };
  handleLogin = () => {
    postData(`/login`, {
      username: this.state.username,
      password: this.state.password
    })
      .then(data => {
        if (data.status === "pass") {
          this.setState({
            authenticated: data.user
          });
          state.setUser(data.user);
        }
      })
      .catch(error => console.error(error));
  };
  handleUserChange = e => {
    this.setState({ username: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  render = () => {
    if (this.state.authenticated) {
      return (
        <div style={this.style}>Logged in as {this.state.authenticated}</div>
      );
    }
    return (
      <form style={this.style}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          style={this.inputStyle}
          onChange={this.handleUserChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          style={this.inputStyle}
          onChange={this.handlePasswordChange}
        />
        <button type="button" onClick={this.handleLogin}>
          Login
        </button>
      </form>
    );
  };
}
