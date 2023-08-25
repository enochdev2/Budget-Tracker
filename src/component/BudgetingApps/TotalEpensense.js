import React, {useContext} from 'react'
import { AppContext } from './ContextApi/ContextApp.js';




const TotalEpensense = () => {
  const {expenses} = useContext(AppContext);
   
  const totalExp = expenses.reduce((total, item)=>{
    return (total += item.cost);
  },0)
  return (
    <div>
        <h3><span>TotalExpenses:</span> ${totalExp} </h3>
    </div>
  )
}

export default TotalEpensense