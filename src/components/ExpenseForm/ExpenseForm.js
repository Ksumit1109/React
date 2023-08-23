import React, { useState } from 'react';
const ExpenseForm = () => {

    // const [title,setTitle] = useState('');
    // const titleChng = (event)=>{
    //     setTitle(event.target.value);
    // }

    // const [amount,setAmt] = useState('')
    // const amtChng = (event)=>{
    //     setAmt(event.target.value)
    // }

    // const [date,setDate] = useState('');
    // const dateChng = (event)=>{
    //     setDate(event.target.value)

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmt: '',
        enteredDate: ''
    })

    const titleChng = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        })
    }

    const amtChng = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmt: event.target.value }
        })
    }

    const dateChng = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        })
    }

    // Event handler for form submission
    const submitbtn = (event) => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        console.log(userInput); // Log the user input to the console
    };




    return (
        <div>
            <form id="Form">
                <label class="Title">Title</label>
                <input type="text" onChange={titleChng} />
                <label class="Amount">Amount</label>
                <input type="text" onChange={amtChng} />
                <label class="Date">Date</label>
                <input type="date" onChange={dateChng} />
            </form>
            <button onClick={submitbtn}>Submit</button>
        </div>
    )
}

export default ExpenseForm