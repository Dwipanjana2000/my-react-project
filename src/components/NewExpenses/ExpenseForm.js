import React,{useState} from 'react';
import './ExpenseForm.css';

// const ExpenseForm=()=>{

// const [title,setTitle]=useState('')

//     const handleInput=event=>{
//         setTitle(event.target.value)
//     }
//     const logValue=()=>{
// console.log(title)
//     }
// return (
//     <div>
// <input onChange={handleInput} placeholder="Enter Title"/>
// <button onClick={logValue} > Log value</button>
//         </div>
// )   
// }

const ExpenseForm=()=>{
    // const [enteredTitle, setEnteredTitle]=useState('');
    // const [enteredAmount,setEnteredAmount]=useState('');
    // const [enteredDate,setEnteredDate]=useState('');

   const [userInput,setUserInput]= useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    })
    const titleChangeHandler=(event)=>{
       setUserInput({
        ...userInput,
        enteredTitle:event.target.value
       })
    }
     const amountChangeHandler=(event)=>{
       setUserInput({
        ...userInput,
        enteredAmount:event.target.value
       })
    }

    

    const dateChangeHandler=(event)=>{
       setUserInput({
        ...userInput,
        enteredDate:event.target.value
       })
    }
    const submitHandler=(event)=>{
event.preventDefault();
console.log(userInput)
setUserInput({enteredTitle:'',enteredAmount:'',enteredDate:''});


    }
    return (
      
       <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text"  value={userInput.enteredTitle} onChange={titleChangeHandler}/>

        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number"  value={userInput.enteredAmount} onChange={amountChangeHandler}/>

        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" value={userInput.enteredDate} onChange={dateChangeHandler}/>

        </div>
        <div className="new-expense_actions">
            <button>Add Expense</button>
        </div>
        </div>
       </form>
    )
}
export default  ExpenseForm;