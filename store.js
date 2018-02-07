import {createStore, applyMiddleware} from 'redux';
import logger from "redux-logger";

import thunk from 'redux-thunk';
import reducers from './reducers'
import promise from 'redux-promise-middleware'
  const middleware = applyMiddleware(promise(), thunk,logger);
/*
  store.subscribe(() =>{
    console.log("store change", store.getState());
  });
  store.dispatch({type:"INC", playload: 1});
  store.dispatch({type:"INC", playload: 2});
  store.dispatch({type:"INC", playload: 4});
*/
export default createStore(reducers, middleware);
  
