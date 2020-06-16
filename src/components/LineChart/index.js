import React, { Component } from 'react'
import Chart from "chart.js";
import "./style.css";

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
       const myChartRef = this.chartRef.current.getContext("2d");
       //const {data} = this.props;

       console.log(this.props)
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Mon","Tue","Wed","Thurs","Fri"],
                datasets: [
                    {
                        label: "Daily Expenditure ($)",
                        data: [5,4,5,6,7],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}