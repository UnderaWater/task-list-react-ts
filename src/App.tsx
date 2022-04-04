import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="tasklist">
      <h1 className='tasklist__title'>
        TASK LIST
      </h1>
      <InputField inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}

export default App;