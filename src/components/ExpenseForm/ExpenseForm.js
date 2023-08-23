import React, {useState} from 'react';
let submitbtn;
const ExpenseForm=()=>{
    const [title,setTitle] = useState('');
    const titleChng = (event)=>{
        setTitle(event.target.value);
    }
   
    const [amount,setAmt] = useState('')
    const amtChng = (event)=>{
        setAmt(event.target.value)
    }

    const [date,setDate] = useState('');
    const dateChng = (event)=>{
        setDate(event.target.value)
    }

    return(
        <div>
            <form id="Form">
                <label class="Title">Title</label>
                <input type="text" onChange={titleChng}/>
                <label class="Amount">Amount</label>
                <input type="text" onChange={amtChng}/>
                <label class="Date">Date</label>
                <input type="date" onChange={dateChng}/>
            </form>
            <button onClick={submitbtn}>Submit</button>
        </div>
    )
}

export default ExpenseForm