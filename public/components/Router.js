import React from "react";
import PropTypes from "prop-types";
import Login from "app/components/Login";
import Home from "app/components/Home";
import About from "app/components/About";
import Save from "app/components/Save";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const style = {
  position: "fixed",
  zIndex: 1001,
  width: "100%",
  top: 0
};

function AppRouter(props) {
  return (
    <Router>
      <div>
        <nav
          style={style}
          className="navbar navbar-expand-sm navbar-light bg-light"
        >
          <div>
            <h4 style={{ color: "grey", paddingRight: 10 }}>
              {props.appState.title}
            </h4>
          </div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about/">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{ marginTop: 56 }}>
          <Route
            path="/"
            exact
            render={() => <Home appState={props.appState} />}
          />
          <Route path="/about/" component={About} />
        </div>
      </div>
    </Router>
  );
}

AppRouter.propTypes = {
  appState: PropTypes.object.isRequired
};

export default AppRouter;
