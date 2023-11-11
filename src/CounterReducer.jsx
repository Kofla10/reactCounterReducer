import React, {useReducer} from 'react'
import reducer2 from './hooks/reducer2';

const initialData = {
    count        : 3,
    countInterval: 1,
    increment    : true
}

const CounterReducer = () => {

    const [state, dispatch] = useReducer(reducer2, initialData);

    const handleCheck = (e) => {
        const {checked} = e.target;

        dispatch({
            type:"CHECK",
            increment:checked
        });

    }

    const handleInterval = (e) => {
        const {value} = e.target;

        dispatch({
            type: "CHANGE_INCREMENT",
            value: value
        })

    }

    const handleRestar = (e) => {
        console.log('restart form');

        dispatch({
            type: "RETURN"
        })
    }

    const handleCount = () => {
        if(state.increment){
            dispatch({
                type     : "ADD",
                count    : state.count,
                increment: state.countInterval
            })
        } else{
            dispatch({
                type     : "SUBTRA",
                count    : state.count,
                increment: state.countInterval
            })
        }
    }

    return (
        <>
            <h1>Hook useReducer { state.count }</h1>
            <div>
                <input
                    type     = "checkbox"
                    id       = 'chk'
                    checked  = {state.increment}
                    onChange = {handleCheck}
                    />
            </div>
            <div>
                <input
                    type        = "number"
                    id          = 'interval'
                    value       = {state.countInterval}
                    placeholder = 'Interval'
                    onChange    = {handleInterval}
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
