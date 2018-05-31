import React, {Component} from "react";
import {connect} from 'react-redux'
import { Tabs, Icon, Button } from 'antd';
import userInfo from "../store/personalInfo/reducer";
import {getUserInfo} from "@/store/personalInfo/action";
const TabPane = Tabs.TabPane;

class RedPackage extends Component{
    constructor(props){
        super(props);
    }
    addRedPackage(){
        let redPacket = Number(this.props.redPacket) + 1;
        this.props.getUserInfo({redPacket})
    }
    render(){
        return (
            <React.Fragment>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="apple" />红包充值</span>} key="1">
                        当前红包个数: {this.props.redPacket}
                        <hr/>
                        <Button onClick={this.addRedPackage.bind(this)}>点我充值</Button>
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />可用红包</span>} key="2">
                        Tab 2
                    </TabPane>
                </Tabs>
            </React.Fragment>
        )
    }
}

export default connect((state) => {
    return {redPacket: state.userInfo.redPacket}
}, {getUserInfo})(RedPackage)