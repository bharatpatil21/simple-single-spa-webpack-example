import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";

export default class Root extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {}
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/signup" exact component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
  componentWillUnmount() {}
}
