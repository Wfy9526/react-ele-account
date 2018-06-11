import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Link, withRouter } from 'react-router-dom';
import "./home.less";
import { Menu, Icon, Layout, message } from "antd";
import svg from "@/image/logo.svg";
import common from '@/util/common';
import {getUserInfo} from "@/store/personalInfo/action";
import PropTypes from 'prop-types';
import store from '@/store/index';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Home extends Component {

  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext(){
     return {store: store}
  }

  componentWillMount(){
    let self = this;
    common.getDataByAjax('./data.json').then((data) => {
      self.props.getUserInfo(data.personalInfo);
    }, (data) => {
      message.error('获取数据失败!')
    })
  }
  handleClick = (val) => {
    this.props.history.push(val);
  };
  render() {
    return (
      <React.Fragment>
        <Layout className="wrap-container">
          <Header className="header">
            <img src={svg} className="rotate" />
            <span>练手项目</span>
          </Header>
          <Layout>
            <Sider>
              <Menu
                mode={"inline"}
                inlineCollapsed={false}
                style={{ width: 256 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1", "sub2", "sub3"]}
              >
                <Menu.Item key="1" onClick={this.handleClick.bind(this, "/")}>
                  <Icon type="mail" />
                  个人中心
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="calendar" />
                      <span>我的订单</span>
                    </span>
                  }
                >
                  <Menu.Item key="2" onClick={this.handleClick.bind(this, "/recentOrder")}>近三个月订单</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>我的资产</span>
                    </span>
                  }
                >
                  <Menu.Item key="3"  onClick={this.handleClick.bind(this, "/redPackage")}>我的红包</Menu.Item>
                  <Menu.Item key="4">账户余额</Menu.Item>
                  <Menu.Item key="5">我的金币</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>我的资料</span>
                    </span>
                  }
                >
                  <Menu.Item key="7">个人资料</Menu.Item>
                  <Menu.Item key="8">地址管理</Menu.Item>
                </SubMenu>
                <Menu.Item key="9"  onClick={this.handleClick.bind(this, "/myCollection")}>我的收藏</Menu.Item>
              </Menu>
            </Sider>
            <Content className="main-content">
            {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({
  userInfo: state.userInfo
}), {getUserInfo,})(Home);