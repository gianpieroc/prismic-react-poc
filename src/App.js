import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Preview from "./Preview";
import NotFound from "./NotFound";

const App = props => (
  <Router>
    <Switch>
      {/* <Redirect exact from="/" to="/help"/> */}
      <Route
        exact
        path="/"
        component={routeProps => (
          <Preview {...routeProps} {...props} />
        )}
      />
      <Route
        exact
        path="/preview"
        render={routeProps => (
          <Preview {...routeProps} {...props} />
        )}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
