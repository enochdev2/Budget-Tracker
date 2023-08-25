import React, {useContext, useState} from 'react'
import Income from './Income.js';
import Balance from './Balance.js';
import TotalEpensense from './TotalEpensense.js';
import './BudgetingApp.css'
import ExpenseLIst from './ExpenseLIst.js';
import AddExpenses from './AddExpenses.js';
import { ContextApp, AppContext } from './ContextApi/ContextApp.js';


const BudgetingApp = () => {
    const [searchs, setSearchs] = useState('');
    
    
    const handleChange = e =>{
        setSearchs(e.target.value)
    }


  return (
<ContextApp>
 <section className="container">
        <div>
            <h1>
            My Budgeting Planner
            </h1>
            </div>
        <div className="wrapper">

        <div className="income">
            <Income/>
        </div>
        <div className="balance">
            <Balance/>
        </div>
        <div className="totalExp">
            <TotalEpensense />
        </div>
        </div>
        <h2 className='exp-name'>Expenses</h2>
        <input type="text" className='search'
        value={searchs}
        onChange={handleChange}
        name="search" id="input" placeholder='Search for expenses' />
        <div className="explist">
            <ExpenseLIst search={searchs}/>
        </div>
        <div className="addexpense">
            <AddExpenses />
        </div>
    </section>
</ContextApp>
  )
}


export default BudgetingApp