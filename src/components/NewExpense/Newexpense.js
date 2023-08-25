import React from "react"
import './Newexpense.css'
import Expenseform from './ExpenseForm/Expenseform'

const Newexpense = (props)=>{
    const recieve_data_from_ExpenseForm= (Data)=>{
        const addIdOnExp = {
            ...Data,
            id: Math.random().toString()
        }
        props.RecData(addIdOnExp)
    }
    

    return <div className="new-expense">
        <Expenseform SendFormExpData= {recieve_data_from_ExpenseForm}/>
    </div>
}

export default Newexpense;
