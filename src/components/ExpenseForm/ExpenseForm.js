import React, { useState } from 'react';
const ExpenseForm = () => {

    const [enteredTitle,setTitle] = useState('');
    const titleChng = (event)=>{
        setTitle(event.target.value);
    }

    const [enteredAmt,setAmt] = useState('')
    const amtChng = (event)=>{
        setAmt(event.target.value)
    }

    const [enteredDate,setDate] = useState('');
    const dateChng = (event)=>{
        setDate(event.target.value)
    }

    const submitHandler = (event)=>{
        event.preventDefault()

        const expData = {
            title : enteredTitle,
            amount : enteredAmt,
            date : new Date(enteredDate)
        }
        console.log(expData)
    }
        

    // // Event handler for form submission
    // const submitbtn = (event) => {
    //     event.preventDefault(); // Prevent the form from submitting and refreshing the page
    //     console.log(userInput); // Log the user input to the console
    // };




    return (
        <div>
            <form id="Form" onSubmit={submitHandler}>
                <label class="Title">Title</label>
                <input type="text" onChange={titleChng} />
                <label class="Amount">Amount</label>
                <input type="text" onChange={amtChng} />
                <label class="Date">Date</label>
                <input type="date" onChange={dateChng} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm




