import React, {useState} from 'react'
import useForm from '../hooks/useForm';

const Form = () => {

    const initialState = {
        add_subtract: true,
        count       : 3,
        number      : 0
    };

    // const [data, setData] = useState(second)
    const { add_subtract, number,count,  handleChangeCount, handleUpdateNumber, handleUpdateCheck, handleRestarForm } = useForm( initialState );

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        // <form onSubmit={handleSubmit}>
        <div>
            <div>
                <input type     = "checkbox"
                       id       = 'add_subtract'
                       checked  = { add_subtract }
                       onChange = { handleUpdateCheck }
                    />
            </div>
            <div>
                <input type        = "number"
                       placeholder = 'Enter Number'
                       id          = 'number'
                       value       = { number }
                       onChange    = { handleUpdateNumber }
                />
            </div>
            <button id={ add_subtract ? "ADD" : "SUBTRACT" } onClick={handleChangeCount}>{ add_subtract ? "ADD" : "SUBTRACT" }</button>
            <button  onClick={handleRestarForm}>Restaurar</button>
        
        </div>
    )
}
export default Form
