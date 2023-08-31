import React,{useState} from 'react';
import './ExpenseDetails.css'
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';




const ExpenseDetails = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021')
    const filterChngHandler = (selectedYear)=>{
        setFilteredYear(selectedYear)
    }

    const FilterExpenses= props.items.filter(exp=>{
        return exp.date.getFullYear().toString() === filteredYear
    })

    return (
        <div className="expenses-item">
            <ExpenseFilter selected = {filteredYear} onChangeFilter={filterChngHandler}/>
            {FilterExpenses.map((item) => (
                <ExpenseItem key={item.id} item={item} />
                ))}
                <h2>{props.items.title}</h2>
                <h3>{props.items.locationOfExp}</h3>
                <div>{props.items.price}</div>
        </div>
    )
}




export default ExpenseDetails;
