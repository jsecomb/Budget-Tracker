import React, { Component } from 'react'
import Chart from "chart.js";
import "./style.css";

export default class LineGraph extends Component {
    
    chartRef = React.createRef();
    
    componentDidMount() {
       const myChartRef = this.chartRef.current.getContext("2d");

       let chartData = this.props.props.map(expense => expense[2])
       console.log(chartData)
       console.log(this.props.props)
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Mon","Tue","Wed","Thurs","Fri"],
                datasets: [
                    {
                        label: "Daily Expenditure ($)",
                        data: [1,2,3],
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