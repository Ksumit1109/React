import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  const [removed, setRemoved] = useState(false);

  const deleteBtn = () => {
    setRemoved(true);
  };

  if (removed) {
    return null;
  }

  return (
    <div className="expense-item" id={`expense-container-${props.item.id}`}>
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <div className="expense-item__price me-1">${props.item.price}</div>
      </div>

      <button onClick={deleteBtn}>Remove</button>
    </div>
  );
};

export default ExpenseItem;
