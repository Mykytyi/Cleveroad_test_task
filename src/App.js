import React from 'react';
import './App.css';
import {rootReducer} from './reducers/index';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

import ShowMap from './containers/ShowMap';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <ShowMap />
    </Provider>
  );
}

export default App;
