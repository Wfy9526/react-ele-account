import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/home/home.jsx';

export default class RouterConfig extends Component{
    render(){
        return (<HashRouter>
            <Switch>
            <Route path="/" exact component={Home}></Route>
            <Redirect to="/"></Redirect>
            </Switch>
        </HashRouter> );
                
    }
}