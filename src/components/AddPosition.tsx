import React, { useState } from 'react';

type InputBoxProps = {
    id: string;
    name: string;
    placeholder: string;
}
const InputBox = ({id,name,placeholder}: InputBoxProps) => {
    return (
        <div className='input-group mb-3'>
            <span className='input-group-text'>{name}</span>
            <input 
                className='form-control' 
                id={id} 
                placeholder={placeholder} 
                name={name} 
            />
        </div>
    )
}

const AddPosition = () => {
    const [code, setCode] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [bookValue, setBookValue] = useState<number>(0);

    return (
        <div className='container-fluid'>
            <InputBox 
                id='quantity' 
                name='数量' 
                placeholder='数量を入力してください'
            />

        </div>
    )
}

export default AddPosition;