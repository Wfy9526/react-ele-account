import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect, hashHistory  } from 'react-router-dom';
import { createHashHistory as createHistory } from "history";
import Home from '@/home/home.jsx';
import PersonalInfo from "@/personalInfo/personalInfo.jsx";
import Test from "@/personalInfo/test.jsx";

export default class RouterConfig extends Component{
    render(){
        return (
        <Home history={createHistory()}>
        <HashRouter>
        <Switch>
            <Route path="/" exact component={PersonalInfo}></Route>
            <Route path="/test" component={Test}></Route>
            <Redirect to="/"></Redirect>
            </Switch>
            </HashRouter>
        </Home>
         );
                
    }
}