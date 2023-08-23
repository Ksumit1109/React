import React from 'react';

const expenseForm=()=>{
    const InputChng = (event)=>{
        const Value = event.target.value;
        console.log(Value)
    }
    const ResetValue =(event)=>{
        event.preventDefault()
    }
    return(
        <div>
            <form id="Form">
                <label class="Title">Title</label>
                <input type="text" onChange={InputChng}/>
                <label class="Amount">Amount</label>
                <input type="text" onChange={InputChng}/>
                <label class="Date">Date</label>
                <input type="date" onChange={InputChng}/>
            </form>
            <button onSubmit={ResetValue}>Submit</button>
        </div>
    )
}

export default expenseForm