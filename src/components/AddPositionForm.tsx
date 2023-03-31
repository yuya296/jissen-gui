import { useState } from 'react';
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Issue } from '../types/Issue';

type AddPositionInputs = {
    code: string;
    quantity: number;
    bookValue: number;
    target: string;
}

type AddPositionProps = {
    issues: Issue[];
    submit: (a: AddPositionInputs) => void;
    defaultCode?: string;
}

const AddPosition = ({ issues, submit, defaultCode }: AddPositionProps) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<AddPositionInputs>({
        defaultValues: {
            code: defaultCode ?? issues[0].code,
            quantity: 0,
            bookValue: 0,
            target: 'deals',
        }
    });

    const onSubmit: SubmitHandler<AddPositionInputs> = (data: AddPositionInputs) => {
        submit(data);
        reset();
    }

    const TARGET = {
        ADD_DEAL: 'deals',
        ADD_POSITION: 'positions',
    }
    const [target, setTarget] = useState(TARGET.ADD_DEAL);

    return (
        <div className='container-sm'>
            <form onSubmit={handleSubmit(onSubmit)} id='addPosition'>
                <div className='input-group mb-3'>
                    <ButtonGroup {...register('target')}>
                        {Object.values(TARGET).map(item => (
                            <ToggleButton
                                value={item}
                                id={item}
                                key={item}
                                name='radio'
                                type='radio'
                                variant={target === item ? 'secondary' : 'outline-secondary'}
                                checked={target === item}
                                onChange={() => setTarget(item)}
                            >
                                {/* TODO: スパゲッティ */}
                                {item==='deals'?'取引':'在庫'}
                            </ToggleButton>

                        ))}

                    </ButtonGroup>
                </div>

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
                    <span className='input-group-text'>数量</span>
                    <input
                        className='form-control'
                        {...register("quantity", {
                            required: "数量を入力してください",
                            min: 0,
                        })} />
                </div>

                <div className='input-group mb-3'>
                    <span className='input-group-text'>価格</span>
                    <input
                        className='form-control'
                        {...register("bookValue", {
                            required: "価格を入力してください",
                            min: 0,
                        })} />
                </div>
            </form>

        </div>
    )
}

export default AddPosition;