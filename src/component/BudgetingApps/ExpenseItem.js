import React, {useContext} from 'react'
import {TiDelete} from 'react-icons/ti';
import { AppContext } from './ContextApi/ContextApp.js';






const ExpenseItem = ({name, cost, id}) => {
  const { dispatch} = useContext(AppContext);
    // const {name, cost} = item;

const handleDelete = () => {
  dispatch({type:'DELETE', payload:id})
}

  return (
    <div className='singe-expenses'>
          {name}
      <span>
         ${cost} 
        </span>
        <TiDelete className='delete' onClick={handleDelete}/>
    </div>
  )
}

export default ExpenseItem