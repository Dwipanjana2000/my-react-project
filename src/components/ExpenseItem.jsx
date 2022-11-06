import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {

  return (
    <div>
     <div className="expense-item"><h1>
      <ExpenseDate date={props.date}></ExpenseDate>
     </h1> </div>
     <div className="expense-item__description">
      <h2><ExpenseDetails title={props.title} amount={props.amount}></ExpenseDetails> </h2>
    </div>
    </div>
  );
};

export default ExpenseItem;
