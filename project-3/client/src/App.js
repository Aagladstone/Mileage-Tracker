import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import UserPage from './Pages/UserPage';
// import Reports from './Pages/Reports';
import NoMatch from "./Pages/NoMatch";

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/user" component={UserPage} />

          {/* <Route exact path="/reports" component={Reports} /> */}
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;

