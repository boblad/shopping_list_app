import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';
import ReactSL  from './ReactSL';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class Root extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <Provider store={store}>
        <ReactSL />
      </Provider>
    );
  }
}

export default Root;
