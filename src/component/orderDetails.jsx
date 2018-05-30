import React, {Component} from 'react';
import { Steps, Breadcrumb, Icon } from 'antd';
const Step = Steps.Step;

export default class OrderDetails extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
    }
    render(){
        return (
            <React.Fragment>
                <Breadcrumb>
                    <Breadcrumb.Item href="#/recentOrder">
                        <Icon type="user" />
                        <span>近三个月订单</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {this.props.match.params.id}
                    </Breadcrumb.Item>
                </Breadcrumb>



                <h3>订单详情</h3>
                <hr/>
                这是{this.props.match.params.id}的订单详情
                <Steps current={3} >
                    <Step title="订单已提交"/>
                    <Step title="商家已接单"/>
                    <Step title="已送达"/>
                </Steps>
            </React.Fragment>
        )
    }
}

