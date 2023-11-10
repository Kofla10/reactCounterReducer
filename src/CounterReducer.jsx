import React, {useReducer} from 'react'
import reducer2 from './hooks/reducer2';

const initialData = {
    count        : 3,
    countInterval: 1,
    increment    : true
}

const CounterReducer = () => {

    const [state, dispatch] = useReducer(reducer2, initialData)
    console.log('the data is: ',state);

    const handleCount = (e) => {
        console.log('send form')
    }

    const handleCheck = (e) => {
        const action = {
            type: "ADD", 
             
        }
        console.log('change check')
    }
    const handleInterval = (e) => {
        console.log('change interval')
    }
    const handleRestar = (e) => {
        console.log('restart form');
        const action = {
            type: ""           
             
        }
        dispatch(action)
    }

    return (
        <>
            <h1>Hook useREduver { state.count }</h1>
            <div>
                <input type="checkbox" 
                    id='incremet'
                    defaultChecked = {state.increment}
                       onChange={handleCheck}
                    />
            </div>
            <div>
                <input type="number" 
                    id='countInterval'
                    placeholder='Interval'
                       onChange={handleInterval}
                />
            </div>
            <div>
                <button onClick={handleCount}> {state.increment? 'ADD':'SUBTRACT' }</button>
                <button onClick={handleRestar}> Restart</button>
            </div>
        </>
    )
}

export default CounterReducer
