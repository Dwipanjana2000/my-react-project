import React, { useState } from "react";
import Card from "../UI/Card";
import "../UI/Card.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title)
  const [amount, setAmount] = useState(props.amount)
  const changeExpense = () => {

    setAmount('$100')

  }

  return (
    <div className="expense-item"> <Card ><h1>
      <ExpenseDate date={props.date}></ExpenseDate>
    </h1>
      <div className="expense-item__description">
        <h2><ExpenseDetails title={props.title} amount={props.amount}></ExpenseDetails> </h2>
      </div>
      {/* {props.items.map((expense) => (
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />))
      } */}
      {/* <button onClick={changeExpense}>ChangeExpense</button> */}
    </Card>
    </div>

  );
};

export default ExpenseItem;
