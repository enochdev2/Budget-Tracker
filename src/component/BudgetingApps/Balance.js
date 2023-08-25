import React, {useContext} from 'react'
import { AppContext } from './ContextApi/ContextApp.js';


const Balance = () => {
  const {name,setName,expenses,income, dispatch, cost,setCost} = useContext(AppContext);

  const totalExp = expenses.reduce((total, item)=>{
    return (total = total + item.cost);
  }, 0);
  return (
     
    <div>
        <h3><span>Balance:</span> ${income - totalExp} </h3>
    </div>
  )
}

export default Balance