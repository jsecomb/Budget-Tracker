import React from "react";
import "./style.css";

function Input(props) {
  return (
      <div id="expenseInput">
      <form>
        <div className="form-group">
            <label id="label" for="expDescription">Expense Description</label>
            <input id="description" value={props.description} onChange={props.handleInputChange} type="text" className="form-control" placeholder="Enter Description"></input>
        </div>
        <label id="label" for="expAmount">Amount</label>
        <div className="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input id="amount" value={props.amount} onChange={props.handleInputChange} type="currency" className="form-control" placeholder="Enter Amount"></input>
        </div>
        <div className="form-group">
            <label id="label" for="expDate">Date</label>
            <input id="date" value={props.date} onChange={props.handleInputChange} type="date" className="form-control" placeholder=""></input>
        </div>
        <button id="submit" type="submit" class="btn btn-primary" onClick={props.handleFormSubmit}>Submit</button>
    </form>
    </div>
  );
}

export default Input;
