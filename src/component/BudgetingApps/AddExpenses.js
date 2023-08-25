import React, {useContext} from  'react'
import { AppContext } from './ContextApi/ContextApp.js';

const AddExpenses = () => {
const {name,setName, dispatch, cost,setCost} = useContext(AppContext);
// console.log(cost)

const onsubmit = (e) => {
 e.preventDefault();
 const id = Date.now();
 const item = {id, name, cost:parseInt(cost)}
 dispatch({type:'ADD EXPENSE', payload: item});
 setName('');
 setCost('');
} 

  return (
    <div className='form-wrapper'>
    <form action="" className='form' onSubmit={onsubmit}>
<div>

<label htmlFor='name' className='label'> name </label> <br/>
        <input type="text" name="name" id="name" value={name}
        onChange={(e)=>setName(e.target.value)}
        required='required' />
</div>
<div>

        <label htmlFor='cost' className='label'> cost </label> <br/>
        <input type="number" name="cost" id="cost" 
        value={cost}
        onChange={(e)=>setCost(e.target.value)}
        required='required'/>
</div>
        <button className='btn' type="submit">Add</button>
    </form>
    </div>
  )
} 

export default AddExpenses