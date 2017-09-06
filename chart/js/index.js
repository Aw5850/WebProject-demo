//基于准备好的dom，初始化echarts实例
var chart_one = echarts.init(document.getElementById('chart-one'));
var option = {
    //标题组件
    title: {
        text: '班级人数'
    },
    //图例组件，可点击图例控制哪些系列不显示
    tooltip: {},
    legend: {
        data: ['人数']
    },
    //直角坐标系 grid 中的 x 轴
    xAxis: {
        data: ["1班", "2班", "3班", "4班", "5班", "6班"]
    },
    //直角坐标系 grid 中的 y 轴
    yAxis: {},
    // type是bar  柱状图
    series: [{ name: '人数', type: 'bar', data: [5, 20, 36, 10, 10, 20] }]
};
// 显示图表
// 通过 setOption 方法生成一个简单的柱状图
chart_one.setOption(option);

var chart_two = echarts.init(document.getElementById('chart-two'));
var option2 = {
    title: {
        text: "数据统计"
    },
    tooltip: {},
    legend: {
        data: ['访问量']
    },
    xAxis: {
        data: ["html", "CSS", "javascript", "vue"]
    },
    yAxis: {},
    //name=legend.data的时候才能显示图例
    series: [{
        name: '访问量',
        type: 'line',
        data: [100, 200, 500, 360]
    }]
}
chart_two.setOption(option2);

var chart_three = echarts.init(document.getElementById('chart-three'));
var option3 = {
    baseOption: {
        title: {
            text: '模拟商店一周销售情况',
            subtext: '虚拟数据'
        },
        legend: {
            data: ['购买金额', '销售金额']
        },
        xAxis: {
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {

        },
        tooltip: {
            show: true,
            formatter: '系列名:{a}<br />类目:{b}<br />数值:{c}'
        },
        series: [{
                name: '购买金额',
                type: 'bar',
                data: [200, 312, 431, 241, 175, 275, 369],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: '平均值',
                        itemStyle: {
                            normal: {
                                color: 'green'
                            }
                        }
                    }]
                }
            },
            {
                name: '销售金额',
                type: 'line',
                data: [321, 432, 543, 376, 286, 298, 400],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: '平均值',
                        itemStyle: {
                            normal: {
                                color: 'blue'
                            }
                        }
                    }]
                }
            }
        ]
    },
    media: [{
        //小与1000像素时候响应
        query: {
            maxWidth: 600
        },
        option: {
            title: {
                show: true,
                text: '测试一下'
            }
        }
    }]
};
//每次窗口大小改变的时候都会触发onresize事件，这个时候我们将echarts对象的尺寸赋值给窗口的大小这个属性，从而实现图表对象与窗口对象的尺寸一致的情况
window.onresize = chart_three.resize;
chart_three.setOption(option3);