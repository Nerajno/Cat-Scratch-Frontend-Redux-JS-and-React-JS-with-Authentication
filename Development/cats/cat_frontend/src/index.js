import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';






import Home from './components/Home';
import About from './components/About';
import CatCard  from './components/CatCard';
import UserCard from './components/UserCard';
import Login from './views/Login';
import SignUp from './views/SignUp';


import AddToCart from './components/AddToCart'

import Logout from './components/Logout';
import EmailVerification from './components/EmailVerification';
import CatPage from './components/CatPage'
import CreateProfile from './components/CreateProfile';
import ProfileForm from './views/ProfileForm';
import AddUserForm from './components/AddUserForm';
import EditProfile from './components/EditProfile';


import CatContainer from './containers/CatContainer';
import UserContainer from './containers/UserContainer';
import UserPage from './components/UserPage';
import CartContainer from './containers/CartContainer';
import CartPage from './components/CartPage';




ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>

          <Switch>
              <Route path ="/app" component={App}/>
              <Route path = "/" exact={true} component={Home}/>
              <Route path = "/about"  component={About}/>
              <Route path = "/cat" exact  component={CatCard}/>
              <Route path = "/users"  component={UserCard}/>
              <Route path = "/login"  component={Login}/>
              <Route path = "/signup"  component={SignUp}/>
              <Route path = "/addtocart"  component={AddToCart}/>

              <Route path = "/logout"  component={Logout}/>
              <Route path = "/addtocart"  component={AddToCart}/>
              <Route path = "/emailverification"  component={EmailVerification}/>
              <Route path = "/create_profile"  component={CreateProfile}/>
              <Route path = "/profile_form"  component={ProfileForm}/>
              <Route path = '/adduserform' component= {AddUserForm}/>
              <Route path = '/editprofile' component= {EditProfile}/>


              <Route path = "/catcontainer" component={CatContainer}/>
              <Route path = "/cat/:id" component={CatPage}/>
              <Route path = "/usercontainer" component={UserContainer}/>
              <Route path = "/user/:id" component={UserPage}/>
              <Route path = "/cartcontainer" component={CartContainer}/>
              <Route path = "/cart/:id" component={CartPage}/>



          </Switch>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
