import { useEffect, useReducer} from "react"
import { createContext} from "react"
import data from "../helpers/data"
import { reducer } from "../reducer/reducer"


export const AppContext = createContext()

const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0,
}
const AppContextProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(() => {
    dispatch({type:"get_total"})
  }, [state.cart])
  

  const clearAll=()=>{
    dispatch({ type:"clearAll"
    })
  }
  const removeItem=(id)=>{
    dispatch({type:"remove",payload:id})
  }

  const increase = (id)=>{
    dispatch({type:"increase",payload:id})
  }
  const decrease = (id)=>{
    dispatch({type:"decrease",payload:id})
  }

  return (
    <AppContext.Provider value={{...state,clearAll,removeItem,increase,decrease}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider