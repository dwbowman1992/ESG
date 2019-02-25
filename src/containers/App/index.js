import regeneratorRuntime from 'regenerator-runtime'
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router-dom';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import createSagaMiddleware from 'redux-saga';
import reduxReset from 'redux-reset';

import routes from '../../routes';
import createReducers from '../../reducers';
import rootSaga from '../../sagas';
import './styles.css';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const App = () => {
    // store is created with the reducers that are in /reducers
  const reducers = createReducers(routerReducer);
  const sagaMiddleware = createSagaMiddleware();
  const history = createHistory();
  history.listen((loc, act) => {
    window.document.getElementById('mainContainer').scrollTop = 0;
  });
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares), reduxReset()));


  sagaMiddleware.run(rootSaga);
  // browser history sync with redux store
  return (
    <Provider store={store}>
      <div id="mainContainer">
        {routes(history)}
      </div>
    </Provider>
  );
};

export default App;
