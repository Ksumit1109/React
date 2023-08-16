import React from 'react';
import './ExpenseDetails.css'

const ExpenseDetails=(props)=>{
    return (
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h3>{props.locationOfExp}</h3>
                <div className="expense-item__price">{props.price}</div>
            </div>
    )
}




export default ExpenseDetails;
