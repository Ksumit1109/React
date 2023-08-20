import React from 'react';
import ExpenseDetails from "./ExpenseDetails"
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';


const ExpenseItem=(props)=> {
    const deleteBtn = ()=>{
        const parentElement = document.getElementById(`expense-container-${props.id}`)
        // Check if the parent element exists before attempting to remove it
        if (parentElement) {
          parentElement.remove();
        }
    
    } 
    return (
        <div className="expense-item" id={`expense-container-${props.id}`}>
            <ExpenseDate  date={props.date}/>
            <ExpenseDetails id={props.id} title={props.title} locationOfExp={props.locationOfExp} price={props.price} />
            <button onClick={deleteBtn}>Remove</button>
        </div>
    );
}

export default ExpenseItem;
