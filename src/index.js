import React, { Fragment } from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import reducer from './reducers'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), devTools)
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <App />,
    </Fragment>
  </Provider>,
  document.getElementById('root')
);
