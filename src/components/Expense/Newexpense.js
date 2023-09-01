import React,{useState} from "react"
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

    const [isEditing , setEditing] = useState(false);

    const StartEditing = ()=>{
        setEditing(true)
    }

    const StopEditing = ()=>{
        setEditing(false)
    }
    

    return <div className="new-expense">
        {!isEditing && <button onClick={StartEditing}>Add expense</button>}
        {isEditing && <Expenseform SendFormExpData= {recieve_data_from_ExpenseForm} onCancel={StopEditing}/>}
    </div>
}

export default Newexpense;
