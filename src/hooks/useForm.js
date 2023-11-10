import React, {useState, useReducer} from 'react'
import reducer from './reducer'

const useForm = (initialState) => {

  //We can do this code with useState but we can do with useReducer
  // const [data, setData] = useState(initialState);

  const [state, dispatch] = useReducer(reducer,initialState);

  const handleChangeCount = (e) => {
    console.log('yeah', e.target.value)
  }

  const handleUpdateCheck = (event) => {
  }

  const handleUpdateNumber = (event) => {
  }

  const handleRestarForm = (event) => {
  }

  return {
    ...state,
    handleChangeCount,
    handleUpdateNumber,
    handleUpdateCheck,
    handleRestarForm
  }
}

export default useForm
