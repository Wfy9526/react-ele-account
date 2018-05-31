import React, {Component} from 'react';
import {HashRouter, Switch, Route, Redirect, hashHistory} from 'react-router-dom';
import {createHashHistory as createHistory} from "history";
import Home from '@/home/home.jsx';
import PersonalInfo from "@/component/personalInfo.jsx";
import RecentOrder from "@/component/recentOrder.jsx";
import OrderDetails from "@/component/orderDetails.jsx";
import RedPackage from "@/component/redPackage.jsx";

export default class RouterConfig extends Component {
    render() {
        return (
            <Home history={createHistory()}>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={PersonalInfo}></Route>
                        <Route path="/recentOrder" component={RecentOrder}></Route>
                        <Route path="/redPackage" component={RedPackage}></Route>
                        <Route path="/orderDetails/:id" component={OrderDetails}></Route>
                        <Redirect to="/"></Redirect>
                    </Switch>
                </HashRouter>
            </Home>
        );

    }
}