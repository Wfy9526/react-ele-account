import React, {Component} from 'react';
import {Route, Redirect, Link, withRouter, Switch} from 'react-router-dom';
import '@/style/recentOrder.css';
import { Button, Modal, message } from 'antd';
const confirm = Modal.confirm;

export default class RecentOrder extends Component {
    constructor(props) {
        super(props);

        this.data = [{
            id: '123',
            time: '2018-05-19 11:04',
            content:  '三杯鸡1份 / 麻辣豆腐1份 等 3 个菜品',
            money:  26.50,
            status: "订单已完成",
        }, {
            id: '456',
            time: '2018-05-19 11:04',
            content:  '三杯鸡1份 / 麻辣豆腐1份 等 3 个菜品',
            money:  26.50,
            status: "订单已完成",
        }, {
            id: '789',
            time: '2018-05-19 11:04',
            content:  '三杯鸡1份 / 麻辣豆腐1份 等 3 个菜品',
            money:  26.50,
            status: "订单已完成",
        }];
    }

    orderAgain(content){
        confirm({
            title: '再来一份',
            content: `确定要再来一份${content}吗？`,
            onOk() {
                message.success('订单成功')
            }
        });
    }
    reviewOrderInfo(id){
        this.props.history.push(`/orderDetails/${id}`)
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="recent-order">
                <h3>近三个月订单</h3>
                <hr/>
                <table>
                    <thead>
                    <tr>
                        <th>下单时间</th>
                        <th>订单内容</th>
                        <th>支付金额</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.data.map((_, i) =>　{
                            return (
                                <tr key={i}>
                                    <td>{_.time}</td>
                                    <td>{_.content}</td>
                                    <td>{_.money}</td>
                                    <td>{_.status}</td>
                                    <td>
                                        <Button size="small" style={{marginRight: '5px'}} onClick={this.reviewOrderInfo.bind(this, _.id)}>订单详情</Button>
                                        <Button size="small" onClick={this.orderAgain.bind(this, _.content)}>再来一单</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}