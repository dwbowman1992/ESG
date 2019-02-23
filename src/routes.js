import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ApplicationShell from "./containers/ApplicationShell/index";

const Routes = history => {
  return (
    <Router onUpdate={() => { window.scrollTo(0, 0); }} history={history}>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (<ApplicationShell />)}
          />
        </Switch>
      </div>
    </Router>
  );
};

Routes.propTypes = {

};

// start with empty strings for form inputs
Routes.defaultProps = {

};

export default Routes;
