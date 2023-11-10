import React, {useState} from 'react'
import useForm from '../hooks/useForm';

const Form = () => {

    const initialState = {
        add_subtract: false,
        count       : 0,
        number      : 0
    };

    // const [data, setData] = useState(second)
    const {add_subtract, number,count,  handleChangeCount, handleUpdateNumber, handleUpdateCheck, handleRestarForm} = useForm(initialState);

    console.log(count);
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.value)
        // console.log('The value count is: ',count)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type     = "checkbox"
                       id       = 'add_subtract'
                       value    = {add_subtract}
                       onChange = { handleUpdateCheck }
                       />
            </div>
            <div>
                <input type        = "number"
                       placeholder = 'Enter Number'
                       id          = 'number'
                       value       = {number}
                       onChange    = { handleUpdateNumber }
                />
            </div>
            <button onClick={handleChangeCount}>{ add_subtract ? "ADD" : "SUBTRACT" }</button>
            <button onClick={handleRestarForm}>Restaurar</button>
        </form>
    )
}
export default Form
