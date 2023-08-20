import React from 'react';
import './ExpenseDetails.css'

const ExpenseDetails=(props)=>{
    const deleteBtn = ()=>{
        const parentElement = document.getElementById(`expense-container-${props.id}`)
        // Check if the parent element exists before attempting to remove it
        if (parentElement) {
          parentElement.remove();
        }
    
    } 
    return (
            <div className="expense-item__description" id={`expense-container-${props.id}`}>
                <h2>{props.title}</h2>
                <h3>{props.locationOfExp}</h3>
                <div className="expense-item__price">{props.price}</div>
                <button onClick={deleteBtn}>Delete</button>
            </div>
    )
}




export default ExpenseDetails;
