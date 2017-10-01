import {HighchartSeries} from "../../types/index";
import * as React from "react";
const ReactHighcharts = require('react-highcharts');

interface IChartProps {
    title?: string;
    xAxis?: string[] | number[];
    series : HighchartSeries[];
}

class Chart extends React.Component < IChartProps, {} > {
    constructor(props : IChartProps) {
        super(props);
    }

    render() {
        const config = {
            xAxis: {
                categories: this.props.xAxis
            },
            yAxis: {
                min: 0
            },
            credits: false,
            title: {
                text: this.props.title
            },
            colors: [
                'rgba(223,83,83,0.9)', '#23558c'
            ],
            series: this.props.series
        };
        return (
            <div>
                <ReactHighcharts config={config}/>
            </div>
        );
    }
}

export default Chart;