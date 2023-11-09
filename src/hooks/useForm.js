import React, {useState, useReducer} from 'react'
import reducer from './reducer'

const useForm = (initialState) => {

  //We can do this code with useState but we can do with useReducer
  // const [data, setData] = useState(initialState);

  const [state, dispatch] = useReducer(reducer,initialState)

  console.log('The state data',state)
  

  const handleCheck = () => {
    
  }
  const handleChangeNumber = () => {

  }

  return {
    ...state,
    handleCheck,
    handleChangeNumber
  }
}

export default useForm
