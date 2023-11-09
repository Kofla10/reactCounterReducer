import React, {useState} from 'react'
import useForm from '../hooks/useForm';    

    const Form = () => {

        const initialState = {
            add_subtract: false,
            number      : 15
        };

        const {add_subtract, number,  handleChangeNumber, handleCheck}  = useForm(initialState);
        
        const handleSubmit = (event) => {
            event.preventDefault()
            console.log(event.target.name)
        }
        
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Add/Subtract</label>
                    <input type="checkbox"
                            name='add_subtract'
                            value={add_subtract}
                            onChange={handleCheck}
                            />
                </div>
                <div>
                    <input type="number"
                        placeholder='Enter Number'
                        name='number'
                        value={number}
                        onChange={handleChangeNumber}
                    />
                </div>
                <button>Incrementar/decrementar</button>
                <button>Restaurar</button>
            </form>
        )
    }

export default Form
