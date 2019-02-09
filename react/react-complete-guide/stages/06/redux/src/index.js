import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import {Provider} from 'react-redux';
import thunx from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const roorReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const logger = store =>{
    return next =>{
        return action =>{
            console.log('[Middleware] Dispatching action:', action);

            const result= next(action);
            console.log('[Middleware] result:', result);
            console.log('[Middleware] next state:', store.getState());
            return result;
        }
    }
} 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(roorReducer, composeEnhancers(applyMiddleware(logger, thunx))); 


ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));
registerServiceWorker();