import React from 'react';
import './styles.css';

interface InputFieldProps {
    inputValue: string;
    setInputValue: (inputValue: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ inputValue, setInputValue }) => {
    return (
        <form className='tasklist__form'>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='tasklist__form-input' type='input' placeholder='Enter a task' />
            <button className='tasklist__form-btn' type='submit'>
                Add
            </button>
        </form>
    )
}

export default InputField