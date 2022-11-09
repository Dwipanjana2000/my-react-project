import React,{useState} from 'react';


const ExpenseForm=()=>{

const [title,setTitle]=useState('')

    const handleInput=event=>{
        setTitle(event.target.value)
    }
    const logValue=()=>{
console.log(title)
    }
return (
    <div>
<input onChange={handleInput} placeholder="Enter Title"/>
<button onClick={logValue} > Log value</button>
        </div>
)   
}
export default  ExpenseForm;