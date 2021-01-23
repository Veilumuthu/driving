import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/store"
import reportWebVitals from './reportWebVitals';
import { startSetCustomers } from "./actions/customer"
import { startSetDirectory } from './actions/directory';

const store = configureStore();

const JSX = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetCustomers()).then(() => {
  ReactDOM.render(JSX, document.getElementById('root'))
})
store.dispatch(startSetDirectory()).then(() => {
  ReactDOM.render(JSX, document.getElementById('root'))
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
