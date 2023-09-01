import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
    if (props.items1.length === 1) {
        return (
            <ul>
                <ExpenseItem key={props.items1[0].id} item={props.items1[0]} />
                <h2>Only a single Expense here. Please add more...</h2>
            </ul>
        );
    }
    else if (props.items1.length === 0) {
        return (<h2>No expense found..</h2>)

    }

    return (
        <ul>
            {props.items1.map((item) => (
                <ExpenseItem key={item.id} item={item} />
            ))}
        </ul>
    );
}

export default ExpenseList;
