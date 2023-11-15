import React, {useState, useReducer} from 'react'
import reducer from './reducer'

const useForm = (initialState) => {

  //We can do this code with useState but we can do with useReducer
  // const [data, setData] = useState(initialState);

  const [state, dispatch] = useReducer(reducer,initialState);

  const handleChangeCount = (e) => {
    const { id } = e.target;

    let action = {};
    console.log(state)
    if(id == "ADD") {
      action = {
        type  : "ADD",
        count : state.count,
        number: state.number
      }
    } else{
      action = {
        type  : "SUBTRACT",
        data : state,
        number: state.number
      }
    }
    dispatch(action);
  }

  const handleUpdateCheck = (e) => {
    const {checked} = e.target;
    const action = {
      type        : "CHANGE_CHECK",
      add_subtract: checked
    }
    dispatch(action)
  }

  const handleUpdateNumber = (e) => {
    const {value} = e.target;
    const action = {
      type  : "CHANGE_NUMBER",
      number: value
    }
    dispatch(action);
  }

  const handleRestarForm = () => {
    console.log('Restart')
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
