import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin'

//redux
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'


const store=createStore(Reducers,compose(applyMiddleware(thunk)))
// Kommunicate.init("13e241c8e7cb472c5be851fbead51bc88");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App  />
  </React.StrictMode>
  </Provider>
);


