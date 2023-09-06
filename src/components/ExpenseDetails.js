import React,{useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import './ExpenseDetails.css'




const ExpenseDetails = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023')
    const filterChngHandler = (selectedYear)=>{
        setFilteredYear(selectedYear)
    }

    const FilterExpenses= props.items.filter((exp)=>{
        return exp.date.getFullYear().toString() === filteredYear
    })

    return (
        <div className="expenses-item text-white">
            <ExpenseFilter selected = {filteredYear} onChangeFilter={filterChngHandler}/>
            <ExpenseChart expenses = {FilterExpenses}/>
            <ExpenseList items1={FilterExpenses}/>
        </div>
    )
}




export default ExpenseDetails;
