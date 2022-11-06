import React from "react";
import Card from "./Card";
import "./Card.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {

  return (
    
     <Card className="expense-item"><h1>
      <ExpenseDate date={props.date}></ExpenseDate>
     </h1>
     <div className="expense-item__description">
      <h2><ExpenseDetails title={props.title} amount={props.amount}></ExpenseDetails> </h2>
      </div>
    </Card>
   
  );
};

export default ExpenseItem;
