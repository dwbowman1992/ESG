import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ApplicationShell from "./containers/ApplicationShell/index";
import Settings from "./containers/Settings/index";
import Info from "./containers/Info/index";
import Footer from "./components/footer/index";

const Routes = history => {
  return (
    <Router onUpdate={() => { window.scrollTo(0, 0); }} history={history}>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Footer />
                <ApplicationShell />
              </div>
            )}
          />
          <Route
            exact
            path="/settings"
            render={() => (
              <div>
                <Footer />
                <Settings />
              </div>
            )}
          />
          <Route
            exact
            path="/info"
            render={() => (
              <div>
                <Footer />
                <Info />
              </div>
            )}
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
