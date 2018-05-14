import React, { Component } from "react";
import { connect } from 'react-redux';
import './home.less';
import { Button , Steps  } from 'antd';

class Home extends Component {
    render() {
        return (
            <div className="parent-container">
                <div className="text">
                    hello,world!!
                </div>
            </div>
        );
    }
}

export default Home;