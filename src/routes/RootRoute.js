import React from 'react';
import {BrowserRouter as Router, Switch ,Route } from "react-router-dom";
import Login from "../pages/login/Login"
import SignUp from "../pages/signup/SignUp"
import ForgotPassword from "../pages/forgotpasswoord/ForgotPassword"
import Profile from "../pages/profile/Profile"
import EnterNewPassword from "../pages/enternewpassword/EnterNewPassword"

const RootRoute = () => {
    return(
        <Router>
            <Switch>
            <Route exact path="/" component = {Login}></Route>
            <Route exact path="/Signup" component ={SignUp}></Route>
            <Route exact path="/ForgotPassword" component = {ForgotPassword}></Route>
            <Route exact path="/EnterNewPassword" component = {EnterNewPassword}></Route>
            <Route exact path="/Profile/:name" component ={Profile}></Route>
            </Switch>
        </Router>
    );
};
export default RootRoute;