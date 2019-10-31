import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import todoApp from './reducers';
import App from './components/App';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(todoApp, storeEnhancers());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
