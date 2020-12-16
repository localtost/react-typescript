import React, {
    useState,
    FC,
    ChangeEvent,
    KeyboardEvent
} from "react";

interface Props {
    handlerChange: (value: string) => void,
}

const TodoFrom: FC<Props> = (props) => {
    const [value, setValue] = useState<string>('')
    const handlerChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value)
    }
    const handlerKeyPress = (event: KeyboardEvent): void => {
        if (event.key === 'Enter') {
            setValue('')
            props.handlerChange(value)
        }
    }
    return (
        <div
            className='input-field mt2'>
            <label
                htmlFor="title"
                className='active'>Введите
                название
                дел</label>
            <input
                value={value}
                onChange={handlerChange}
                onKeyPress={handlerKeyPress}
                type="text"
                id='title'
                placeholder='Название дел'
            />
        </div>
    )
}
export default TodoFrom
