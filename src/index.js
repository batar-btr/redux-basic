import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/index'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = store => next => action => {
    console.log('[MIDDLEWARE] Dispatching', action)
    const result = next(action);
    console.log('[MIDDLEWARE] next state ', store.getState())
    return result
}

// const logger = store => {
//     return next => {
//         return action => {
//             console.log('[MIDDLEWARE] Dispatching', action)
//             const result = next(action);
//             console.log('[MIDDLEWARE] next state ', store.getState())
//             return result
//         }
//     }
// }


const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
