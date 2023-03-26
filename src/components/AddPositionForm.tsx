import { useForm, SubmitHandler } from 'react-hook-form';

type AddPositionInputs = {
    code: string;
    quantity: number;
    bookValue: number;
}

type AddPositionProps = {
    codes: string[];
}

const AddPosition = ({codes}:AddPositionProps) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<AddPositionInputs>();

    const onSubmit: SubmitHandler<AddPositionInputs> = (data) => {
        alert(data);
        reset();
    }

    return (
        <div className='container-sm'>
            <form onSubmit={handleSubmit(onSubmit)}>
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