import React from "react";
import "./style.css";

function Table(props) {
    return (
    <div id="expenseTable">
    <table className="table table-striped">
    <thead>
        <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Running Total</th>
        </tr>
    </thead>
    <tbody>
        {props.expenses.map(expense => (
            <tr key={expense}>
            <td>{expense[0]}</td>
            <td>{expense[1]}</td>
            <td>${expense[2]}</td>
            <td>${expense[3]}</td>
            </tr>
        ))}

    </tbody>
    </table>
    </div>
    )
}

export default Table;