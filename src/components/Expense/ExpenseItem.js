import React from 'react';
import ExpenseDetails from "./ExpenseDetails"
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

const ExpenseItem=(props)=> {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} locationOfExp={props.locationOfExp} price={props.price} />
        </div>
    );
}

export default ExpenseItem;
