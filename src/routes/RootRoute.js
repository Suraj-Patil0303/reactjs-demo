import React from 'react';
import {BrowserRouter as Router, Switch ,Route } from "react-router-dom";
import login from "../pages/login"
import signup from "../pages/signup"
import forgotpassword from "../pages/forgotpassword"
import profile from "../pages/profile"
import enternewpassword from "../pages/enternewpassword"
const RootRoute = () => {
    return(
        <Router>
            <Switch>
            <Route exact path="/" component = {login}></Route>
            <Route exact path="/signup" component ={signup}></Route>
            <Route exact path="/forgotpassword" component = {forgotpassword}></Route>
            <Route exact path="/enternewpassword" component = {enternewpassword}></Route>
            <Route exact path="/profile" component ={profile}></Route>
            </Switch>
        </Router>
    );
};
export default RootRoute;