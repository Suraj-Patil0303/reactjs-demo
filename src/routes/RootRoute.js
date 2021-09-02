import React from 'react';
import {BrowserRouter as Router, Switch ,Route } from "react-router-dom";
import login from "../pages/login"
import signup from "../pages/signup"
const RootRoute = () => {
    return(
        <Router>
            <Switch>
            <Route exact path="/" component = {login}></Route>
            <Route exact path="/signup" component ={signup}></Route>
            </Switch>
        </Router>
    );
};
export default RootRoute;