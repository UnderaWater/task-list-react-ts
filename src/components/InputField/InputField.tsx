import React, { useRef } from 'react';
import './styles.css';

interface InputFieldProps {
    inputValue: string;
    setInputValue: (inputValue: string) => void;
    addTodo: (e: React.FormEvent<HTMLFormElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({ inputValue, setInputValue, addTodo }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={(e) => { addTodo(e); inputRef.current?.blur(); }} className='tasklist__form'>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className='tasklist__form-input'
                type='input'
                placeholder='Enter a task'
            />
            <button className='tasklist__form-btn' type='submit'>
                Add
            </button>
        </form>
    )
}

export default InputField