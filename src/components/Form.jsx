import React, {useState} from 'react'
import Validation from '../helpers/Validation'

    

    const Form = () => {

        const initialState = [{
            add_subtract: false,
            number      : 10
        }];

        const [data, setData] = useState(initialState);
        const {number, add_subtract} = data;
        console.log(data)
        console.log(number)

        const {handleChangeNumber, handleCheck}  = Validation();

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
                            // onChange={handleCheck}
                            />
                </div>
                <div>
                    <input type="number"
                        placeholder='Enter Number'
                        name='number'
                        value={number}
                        // onChange={handleChangeNumber}
                    />
                </div>
                <button>Incrementar/decrementar</button>
                <button>Restaurar</button>
            </form>
        )
    }

export default Form
