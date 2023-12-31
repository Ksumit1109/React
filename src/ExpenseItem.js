import React,{useState} from 'react';
import ExpenseDetails from "./ExpenseDetails"
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';


const ExpenseItem=(props)=> {
    let exp = props.price
    const [Expense,SetExp] = useState(exp)
    const changeExp =()=>{
        SetExp("100$")
    }
    const [removed,DoneRemoved]= useState(false)
    const deleteBtn = ()=>{
        DoneRemoved(true)
    } 

    if(removed){
        return null
    }

    return (
        // id={expense-container-${props.id}}: This line generates a unique id for each expense item's container element by appending 
        // the ids prop to the string "expense-container-". The resulting id will look something like "expense-container-0" for the first
        //  expense item, "expense-container-1" for the second item, and so on.
        <div className="expense-item" id={`expense-container-${props.id}`}>
            <ExpenseDate  date={props.date}/>
            <ExpenseDetails id={props.id} title={props.title} locationOfExp={props.locationOfExp} price={Expense} />
            <button onClick={changeExp}>Change Exp</button>
            <button onClick={deleteBtn}>Remove</button>
        </div>
    );
}

export default ExpenseItem;
