import React from 'react';
import ExpenseForm from './ExpenseForm.js';
import "./NewExpenses.css"

const NewExpenses=(props)=>{
    const saveEnteredDataHandler=(enteredData)=>{
      const expenseData={
        ...enteredData,
        id:Math.random().toString()
      }
     props.onAddExpense(expenseData)
     
    }

    return (

        <div className="new-expense">      
    <ExpenseForm onSaveEnteredData={saveEnteredDataHandler}/>
        </div>
    )


}
export default NewExpenses;