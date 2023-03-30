import { useForm, SubmitHandler } from 'react-hook-form';
import { Issue } from '../types/Issue';

type MtMInputs = {
    code: string;
    marketValue: number;
}

type MtMFormProps = {
    issues: Issue[];
    submit: (a: MtMInputs) => void;
}

const MtMForm = ({ issues, submit }: MtMFormProps) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<MtMInputs>();

    const onSubmit: SubmitHandler<MtMInputs> = (data: MtMInputs) => {
        submit(data);
        reset();
    }

    return (
        <div className='container-sm'>
            <form onSubmit={handleSubmit(onSubmit)} id='mtm'>
                <div className='input-group mb-3'>
                    <span className='input-group-text'>銘柄</span>
                    <select
                        className='form-select'
                        {...register('code', {
                            required: "銘柄コードを入力してください",
                        })}>

                        {issues.map(e => (<option value={e.code}>{`[${e.code}] ${e.name}`}</option>))}
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