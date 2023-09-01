import React from 'react';
import './Expensefilter.css';

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <label className="h5 ms-3" style={{ color: 'white' }}>
        Filter by year
      </label>
      <div className="filter-dropdown me-3">
        <select
          className="form-select" value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
