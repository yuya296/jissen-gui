import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type InputBoxProps = {
    id: string;
    name: string;
    placeholder: string;
}

const InputBox = ({ id, name, placeholder }: InputBoxProps) => {
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

type AddPositionInputs = {
    code: string;
    quantity: number;
    bookValue: number;
}

const AddPosition = () => {
    const [code, setCode] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [bookValue, setBookValue] = useState<number>(0);

    const {
        register, 
        handleSubmit, 
        reset
    } = useForm<AddPositionInputs>();

    const onSubmit: SubmitHandler<AddPositionInputs> = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className='container-fluid'>
       

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='input-group mb-3'>
                    <span className='input-group-text'>銘柄</span>
                    <select 
                        className='form-select' 
                        {...register('code', {
                            required: "銘柄コードを入力してください",
                        })}>

                        {['code1','code2'].map(e => (<option>{e}</option>))}
                    </select>
                </div>

                <div className='input-group mb-3'>
                    <span className='input-group-text'>価格</span>
                    <input 
                        className='form-control'
                        {...register("bookValue", {
                            required: "価格を入力してください",
                        })} />
                </div>

                <div className='input-group mb-3'>
                    <span className='input-group-text'>数量</span>
                    <input 
                        className='form-control'
                        {...register("quantity", {
                            required: "数量を入力してください",
                        })} />
                </div>

                <input type="submit" className='btn btn-default' />
            </form>

        </div>


    )
}

export default AddPosition;