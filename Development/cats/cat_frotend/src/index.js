import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';





import EmailVerification from './components/EmailVerification';





ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
          <Switch>

              <Route path = "/"  component={EmailVerification}/>

          </Switch>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
