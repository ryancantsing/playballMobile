import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import Router from './Router'
import reducers from './reducers';
class App extends Component {
    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk, createLogger()))}>
                <Router />
            </Provider>
        )   
    }
  }

export default App;


