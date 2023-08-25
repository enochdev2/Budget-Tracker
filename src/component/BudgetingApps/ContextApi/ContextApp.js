import React, {useEffect, useState, useReducer, createContext,} from "react";



export const AppContext = createContext();

//    const getLocalStorage = () =>{
//        let list = localStorage.getItem('STATE');
//        if(list){
//            return JSON.parse(localStorage.getItem('STATE'))
//        }
//        else{
//         return []
//        }
//    }
 

//    getLocalStorage();
const initialState =   {   
       income: 2000,
       expenses: []
   } 
   
   
   
   export const ContextApp = ({children}) => {
       
    

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD EXPENSE":
                return{
        ...state,
        expenses: [...state.expenses, action.payload]
    }
    case 'DELETE':
        return{
        ...state, 
        expenses: state.expenses.filter((item)=> item.id !== action.payload)
    }
    case 'CHANGE':
        return {
            ...state,
            income: action.payload
        }
        
        default:
            return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState)
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    
     
    // useEffect(() => {
    //  localStorage.setItem('STATE', JSON.stringify(state))
    // }, [state])
    
    return(
        <AppContext.Provider  value={
        {
            name,
            setName,
            cost,
            setCost,
            dispatch,
            expenses: state.expenses,
            income: state.income,
           
        }
    }>
        {children}
    </AppContext.Provider>
        );
}