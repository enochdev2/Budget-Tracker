import React, {useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext, ContextApp } from './ContextApi/ContextApp.js'



const ExpenseLIst = ({search}) => {
  const {name,setName, expenses, dispatch, cost,setCost} = useContext(AppContext);
  

const filterData = expenses.filter((expense)=> expense.name.toLowerCase().includes(search.toLowerCase())) 

  return (
    <div>
        {filterData.map((item)=>{
    const {id, name,cost} = item;
    return  <ExpenseItem key={id} {...item}/>
        })}
    </div>
  )
}

export default ExpenseLIst