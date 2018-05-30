import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../style/personalInfo.less';
import PropTypes from 'prop-types';
import { is, fromJS } from 'immutable';
import EchartsStatistic from './echartsStatistic';

export default class PersonalInfo extends Component {
    
  static contextTypes = {
    store: PropTypes.object,
  };

    constructor(props){
        super(props);
        this.state = {
            userName: "",
            redPacket: "0",
            phone: "",
            money: 0
        }
    }

    componentWillMount(){
        const self = this;
        self.setState(self.context.store.getState().userInfo);
        this.context.store.subscribe(() => {
            self.setState(self.context.store.getState().userInfo);
        })
    }
    shouldComponentUpdate(newProps, newState){
        return !is(fromJS(this.state),fromJS(newState));
    }
    render() {
        debugger
        return (<React.Fragment>
            <Row gutter={24} className="personal-info">
                <Col span={9}>
                    <Col span={8}>
                        <div className="head-photo"></div>
                    </Col>
                    <Col span={16} className="sub-title">
                        <div>夜已深, {this.state.userName}</div>
                        <span>是不是饿的睡不着呀？吃个夜宵呗！</span>
                    </Col>
                </Col>
                <Col span={5}>
                    <div>我的红包</div>
                    <div><span>{this.state.redPacket}</span>个</div>
                </Col>
                <Col span={5}>
                    <div>我的金币</div>
                    <div><span>{this.state.money}</span>个</div>
                </Col>
                <Col span={5}>
                    <div>账户余额</div>
                    <div><span>{this.state.money}</span>个</div>
                </Col>
            </Row>
            <EchartsStatistic/>
        </React.Fragment>);
    }
}