import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import "../UI/Card.css";

const Expense =(props)=>{
    return (
        <Card>
           
 {props.items.map((expense) => (
        <ExpenseItem  key={expense.id}
        title={expense.title} amount={expense.amount} date={expense.date} />))
      }
        </Card>
    )
}
export default Expense;