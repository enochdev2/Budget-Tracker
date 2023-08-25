import React, {useContext,useState} from 'react'
import { AppContext, ContextApp } from './ContextApi/ContextApp.js';


const Income = () => {
  const {income, dispatch} = useContext(AppContext);

  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState('')
 
 const changeInput = (e) =>{
setInput(e.target.value)
 }
 const changeAmount = (e) =>{
dispatch({type:'CHANGE', payload:input})
setEdit(false)
 }




  return (
    <>
    <div>
      {edit? ( <input type="number" value={input}
      onChange={changeInput}
      name="income" id="incomes" /> ) :
        (<h3><span>Total Income:</span> ${income}
        </h3>)
      }
    </div>
    {!edit? 
    
    (<button type='button' onClick={()=>setEdit(!edit)} >Edit Income</button>):
    ( <button type="button" onClick={changeAmount}>add</button> )
  }
  </>
  )
}

export default Income