import React, { Component } from "react";
import Input from "../components/Input";
import Table from "../components/Table";
import LineChart from "../components/LineChart";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";

class Index extends Component {
  state = {
    description: "",
    amount: 0,
    date: "",
    runningTotal: 0,
    expenses: []
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.id]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.description && this.state.amount>0 && this.state.date){
      let rt = parseInt(this.state.runningTotal) + parseInt(this.state.amount)
      let expenseArray = this.state.expenses
      expenseArray.push([this.state.date, this.state.description, this.state.amount, rt])
      this.setState({
        expenses: expenseArray,
        runningTotal: rt,
      });
      console.log(expenseArray)
    }
    else {
      alert("Please enter a valid amount")
    }
  };

  render() {
    return (
      <>
        <Container style={{ marginTop: 15 }}>
          <Jumbotron/>
        </Container>
        <Container style={{ marginTop: 15 }}>
          <h3>Enter your expenses</h3>
          <Input
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        </Container>
        <Container style={{ marginTop: 15 }}>
          <h3>Expenses table</h3>
          <Table expenses={this.state.expenses}/>
        </Container>
        <Container style={{ marginTop: 15 }}>
          <h3>Expenses by day</h3>
          <LineChart
          expenses={this.state.expenses}/>
        </Container>
      </>
    );
  }
}


export default Index;
