import logo from "./logo.svg";
import React, {useState} from 'react';
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/NewExpenses/ExpenseForm";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expense from "./components/Expenses/Expense"

const DUMMY_EXPENSES= [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

function App() {
  const [expense,setExpense]=useState(DUMMY_EXPENSES)
  
  const addExpenseHandler=(expense)=>{
    setExpense((prevExpense)=>{
      return [expense,...prevExpense]
    })
  }
  return (
    <div>
      <h1>Counter</h1>
      {/* <div>
        expenses.map((expense,i) => (
        <ExpenseItem eventkey={i}>
          title={expenses[i].title} amount={expenses[i].amount} date=
          {expenses[i].date}
        </ExpenseItem>
        ))
      </div> */}

 

      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}
      <Expense items={expense}/>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      
    </div>
  );
}

export default App;
