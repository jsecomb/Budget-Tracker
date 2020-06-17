import React from 'react'
import { Line } from 'react-chartjs-2';
import "./style.css";

export default class LineGraph extends React.Component {
    constructor(props) {
        super(props);
        this.chartReference = React.createRef();
    }
    
    render() {
        return (<Line ref={this.chartReference} data={{
            labels: this.props.expenses.sort().map(expense => expense[0]), datasets: [{label:"Daily Spending ($)", 
                data: this.props.expenses.sort().map(expense => expense[2])
            }]
        }} />)
    }
}