import React from 'react';
import ExpenseItem from "./components/Expense/ExpenseItem"; 
import ExpenseForm from "./components/ExpenseForm/ExpenseForm"

const App=()=> {
  const expenses = [
    {
      id: 0,
      title: "TV",
      price: "22000",
      locationOfExp :"expLocation",
      date:  new Date(2021, 2, 28)
    },
    {
      id: 1,
      title: "Mobile",
      price: "20000",
      locationOfExp :"expLocation",
      date:  new Date(2021, 12, 28)
    }, 
    {
      id: 2,
      title: "Laptop",
      price: "52000",
      locationOfExp :"expLocation",
      date:  new Date(2021, 3, 18)
    },
    {
      id: 3,
      title: "Keyboard",
      price: "2000",
      locationOfExp :"expLocation",
      date:  new Date(2021, 6, 28)
    }
  ]

  const expenseItems =[]
  for(let i=0;i<expenses.length;i++){
    const exp = expenses[i]
    expenseItems.push(<ExpenseItem key={exp.id} id={exp.id} date={exp.date} title={exp.title}  locationOfExp={exp.locationOfExp}  price={exp.price} />)
  }
  return (
    <div>
    <ExpenseForm></ExpenseForm>  
    {expenseItems}
    </div>
  );
}

export default App;
