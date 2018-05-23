import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './personalInfo.less';
import echarts from 'echarts';
import store from "@/store/index"

export default class PersonalInfo extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
    }

    componentDidMount(){
        store.subscribe((state) => {
            this.setState(store.getState())
        })
    }
    render() {
        return (<React.Fragment>
            <Row gutter={24} className="personal-info">
                <Col span={9}>
                    <Col span={8}>
                        <div className="head-photo"></div>
                    </Col>
                    <Col span={16} className="sub-title">
                        <div>夜已深, {}</div>
                        <span>是不是饿的睡不着呀？吃个夜宵呗！</span>
                    </Col>
                </Col>
                <Col span={5}>
                    <div>我的红包</div>
                    <div><span>{this.state.redPacket}</span>个</div>
                </Col>
                <Col span={5}>
                    <div>我的金币</div>
                    <div><span>{this.state.redPacket}</span>个</div>
                </Col>
                <Col span={5}>
                    <div>账户余额</div>
                    <div><span>{this.state.money}</span>个</div>
                </Col>
            </Row>
        </React.Fragment>);
    }
}