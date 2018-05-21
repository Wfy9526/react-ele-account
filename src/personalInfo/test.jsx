import React, { Component } from 'react';
import { Route, Redirect, Link, withRouter, Switch } from 'react-router-dom';
import Test1 from "@/personalInfo/test1.jsx";
export default class Test extends Component{
    tttt(){
        this.props.history.push('/test/test1')        
    }
    
    render(){
        debugger
        return (<div onClick={this.tttt.bind(this)}>test
        <Switch>
        <Route path="/test/test1" component={Test1}></Route>
            <Redirect to="/"></Redirect>
        </Switch>
           
        </div>);
    }
}