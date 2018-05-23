import React, { Component } from 'react';
import { Route, Redirect, Link, withRouter, Switch } from 'react-router-dom';
import Test1 from "@/personalInfo/test1.jsx";
import store from "@/store/index"
export default class Test extends Component{
    tttt(){
        this.props.history.push('/test/test1')        
    }
    componentDidMount(){
        console.log(store.getState())
    }
    render(){
        return (<div onClick={this.tttt.bind(this)}>test
        <Switch>
        <Route path="/test/test1" component={Test1}></Route>
            <Redirect to="/"></Redirect>
        </Switch>
           
        </div>);
    }
}