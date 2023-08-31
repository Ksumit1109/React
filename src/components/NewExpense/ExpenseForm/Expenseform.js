import React, { useState } from 'react';
import "./Expenseform.css"

const Expenseform = (props) => {

    const [enteredTitle, setTitle] = useState('');
    const titleChng = (event) => {
        setTitle(event.target.value);
    }

    const [enteredAmt, setAmt] = useState('')
    const amtChng = (event) => {
        setAmt(event.target.value)
    }

    const [enteredDate, setDate] = useState('');
    const dateChng = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expData = {
            title: enteredTitle,
            price: enteredAmt,
            date: new Date(enteredDate)
        }

        props.SendFormExpData(expData)
        setTitle('');
        setAmt('');
        setDate('');
    }

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmt: '',
    //     enteredDate: ''
    // })

    // const titleChng = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle: event.target.value }
    //     })
    // }

    // const amtChng = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredAmt: event.target.value }
    //     })
    // }

    // const dateChng = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredDate: event.target.value }
    //     })
    // }

    // // Event handler for form submission
    // const submitbtn = (event) => {
    //     event.preventDefault(); // Prevent the form from submitting and refreshing the page
    //     console.log(userInput); // Log the user input to the console
    //     // You can add code here to handle the form data as needed, like sending it to a server or performing other actions.
    // };        

    // // Event handler for form submission
    // const submitbtn = (event) => {
    //     event.preventDefault(); // Prevent the form from submitting and refreshing the page
    //     console.log(userInput); // Log the user input to the console
    // };
    return (
        <form id="Form" onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label className="Title">Title</label>
                    <input type="text" value={enteredTitle} required onChange={titleChng} />
                </div>
                <div className='new-expense__control'>
                    <label className="Amount">Amount</label>
                    <input type="number"  value={enteredAmt} required onChange={amtChng} />
                </div>
                <div className='new-expense__control'>
                    <label className="Date">Date</label>
                    <input type="date" value={enteredDate} required onChange={dateChng} />
                </div>
            </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Submit</button>
                </div>
        </form>
    )
}

export default Expenseform;




