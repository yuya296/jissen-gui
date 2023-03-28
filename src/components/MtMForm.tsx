import { useForm, SubmitHandler } from 'react-hook-form';

type MtMInputs = {
    code: string;
    marketValue: number;
}

type MtMFormProps = {
    codes: string[];
    submit: (a:MtMInputs)=>void;
    close: ()=>void;
}

const MtMForm = ({codes, submit, close}:MtMFormProps) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<MtMInputs>();

    const onSubmit: SubmitHandler<MtMInputs> = (data:MtMInputs) => {
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
                    <span className='input-group-text'>時価</span>
                    <input
                        className='form-control'
                        {...register('marketValue', {
                            required: "値洗い価格を入力してください",
                        })} />
                </div>

            </form>
            
        </div>
    )
}

export default MtMForm;