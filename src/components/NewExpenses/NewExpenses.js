import React from 'react';
import ExpenseForm from './ExpenseForm.js';
import "./NewExpenses.css"

const NewExpenses=()=>{
    const saveEnteredDataHandler=(enteredData)=>{
      const expenseData={
        ...enteredData,
        id:Math.random().toString()
      }
      console.log(expenseData)
    }
    return (

        <div className="new-expense">
          
    <ExpenseForm onSaveEnteredData={saveEnteredDataHandler}/>
        </div>
    )


}
export default NewExpenses;