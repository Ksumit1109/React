import ExpenseItem from "./components/ExpenseItem"; 

function App() {
  const expenses = [
    {
      id: "exp1",
      title: "TV",
      price: "22000",
      locationOfExp :"expLocation",
      date:  new Date(2021, 2, 28)
    },
    {
      id: "exp1",
      title: "Mobile",
      price: "20000",
      locationOfExp :"expLocation",
      date:  new Date(2021, 2, 28)
    }, 
    {
      id: "exp1",
      title: "Laptop",
      price: "52000",
      locationOfExp :"expLocation",
      date:  new Date(2021, 2, 28)
    },
    {
      id: "exp1",
      title: "Keyboard",
      price: "2000",
      locationOfExp :"expLocation",
      date:  new Date(2021, 2, 28)
    }
  ]

  const expenseItems =[]
  for(let i=0;i<expenses.length;i++){
    const exp = expenses[i]
    expenseItems.push(<ExpenseItem id ={exp.id} title={exp.title} price ={exp.price} locationOfExp={exp.locationOfExp} date={exp.date} ></ExpenseItem>)
  }
  return (
    <div>  
    {expenseItems}
    </div>
  );
}

export default App;
