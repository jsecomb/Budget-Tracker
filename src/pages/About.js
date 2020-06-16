import React, { Component } from "react";
import Input from "../components/Input";
import Table from "../components/Table";
import LineChart from "../components/LineChart";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class About extends Component {
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
        <Container style={{ marginTop: 30 }}>
          <div className="Jumbotron">
            <h1>Dollaraire</h1>
            <h2>Put your bux to work.</h2>
          </div>
          <Row>
            <Col size="md-12">
              <h1>Welcome To Dollaraire!</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                Description of how Dollaraire works.
              </p>
            </Col>
          </Row>
          <Input
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <Table expenses={this.state.expenses} />
          <LineChart props={this.state.expenses}/>
        </Container>
      </>
    );
  }
}


export default About;
