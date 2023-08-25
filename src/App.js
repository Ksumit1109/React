import React, {useState} from 'react';
import ExpenseItem from "./components/Expense/ExpenseItem"; 
import Newexpense from './components/NewExpense/Newexpense'; 

const DummyExp = [
  {
    id: "e1",
    title: "TV",
    price: "22000",
    locationOfExp :"expLocation",
    date:  new Date(2021, 2, 28)
  },
  {
    id: "e2",
    title: "Mobile",
    price: "20000",
    locationOfExp :"expLocation",
    date:  new Date(2021, 12, 28)
  }, 
  {
    id: "e3",
    title: "Laptop",
    price: "52000",
    locationOfExp :"expLocation",
    date:  new Date(2021, 3, 18)
  },
  {
    id: "e4",
    title: "Keyboard",
    price: "2000",
    locationOfExp :"expLocation",
    date:  new Date(2021, 6, 28)
  }
]
const App=()=> {
  const [expenses,Setexpenses] = useState(DummyExp)
  

  // const expenseItems = expenses.map((item) => (
  //   <ExpenseItem key={item.id} item={item} />
  // ));
  
  const RecieveDataFromNewExp = (Data)=>{
    const UpdatedExpense = [Data, ...expenses] 
    Setexpenses(UpdatedExpense)
  }

  return (
    <div>
    <Newexpense RecData ={RecieveDataFromNewExp}/> 
    {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
