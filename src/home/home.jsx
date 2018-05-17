import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Link, withRouter } from 'react-router-dom';
import "./home.less";
import { Menu, Icon, Layout } from "antd";
import svg from "@/image/logo.svg";
import PersonalInfo from "@/personalInfo/personalInfo.jsx";


const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
withRouter(PersonalInfo);

class Home extends Component {

  handleClick = () => {
    debugger
    this.props.history.push(`${this.props.location.pathname}/personalInfo`);
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
                <Menu.Item key="1" onClick={this.handleClick.bind(this)}>
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
                  <Menu.Item key="2">近三个月订单</Menu.Item>
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
                  <Menu.Item key="3">我的红包</Menu.Item>
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
                <Menu.Item key="9">我的收藏</Menu.Item>
              </Menu>
            </Sider>
            <Content className="main-content">
            <Route path={`${this.props.location.pathname}/personalInfo`} component={PersonalInfo} />
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Home;
