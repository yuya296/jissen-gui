import { useForm, SubmitHandler } from 'react-hook-form';

type AddPositionInputs = {
    code: string;
    quantity: number;
    bookValue: number;
}

type AddPositionProps = {
    codes: string[];
    submit: (a:AddPositionInputs)=>void;
    close: ()=>void;
}

const AddPosition = ({codes, submit, close}:AddPositionProps) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<AddPositionInputs>();

    const onSubmit: SubmitHandler<AddPositionInputs> = (data:AddPositionInputs) => {
        submit(data);
        close();
        reset();
    }

    return (
        <div className='container-sm'>
            <form onSubmit={handleSubmit(onSubmit)} id='addPosition'>
                <div className='input-group mb-3'>
                    <span className='input-group-text'>銘柄</span>
                    <select
                        className='form-select'
                        {...register('code', {
                            required: "銘柄コードを入力してください",
                        })}>

                        {codes.map(e => (<option>{e}</option>))}
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
            </form>
            
        </div>
    )
}

export default AddPosition;