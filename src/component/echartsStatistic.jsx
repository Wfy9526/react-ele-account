import React, {Component} from 'react';
import {Row, Col} from 'antd';
import echarts from 'echarts';

export default class EchartsStatistic extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.loadEcharts = this.loadEcharts.bind(this);
    }

    componentWillMount() {
    }
    componentDidMount() {
        this.loadEcharts();
    }

    loadEcharts(dom) {
        let option = {
            title: {
                text: '本周叫外卖情况',
                subtext: '源于生活'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['外卖次数', '消费金额']
            },
            toolbox: {
                show: true,
                feature: {
                    magicType: {type: ['line', 'bar']},
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}元'
                }
            },
            series: [
                {
                    name: '外卖次数',
                    type: 'line',
                    data: [1, 3, 0, 2, 1, 0, 3],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    label: {
                        normal: {
                            show: true
                        }
                    }
                },
                {
                    name: '消费金额',
                    type: 'line',
                    data: [15, 70, 0, 40, 19, 0, 100],
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'},
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    normal: {
                                        position: 'start',
                                        formatter: '最大值'
                                    }
                                },
                                type: 'max',
                                name: '最高点'
                            }]
                        ]
                    }
                }
            ]
        };
        let myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(option);
    }

    render() {
        let styleObj = {
            marginLeft: '30px',
            width: '80%',
            height: '400px'
        };
        return (
            <React.Fragment>
                <Row gutter={24} style={{marginTop: "20px"}}>
                    <Col span={24} style={{margin: "0 auto"}}>
                        <div id="main" style={styleObj}></div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}