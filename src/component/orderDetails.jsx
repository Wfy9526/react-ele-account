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
                <Breadcrumb style={{marginBottom: '20px'}}>
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
                <Steps current={3} style={{margin: '20px'}}>
                    <Step title="订单已提交"/>
                    <Step title="商家已接单"/>
                    <Step title="已送达"/>
                </Steps>

                <div style={{backgroundColor: '#fff', padding: '30px', minHeight: '300px'}}>
                    这是{this.props.match.params.id}的订单详情
                </div>
            </React.Fragment>
        )
    }
}

