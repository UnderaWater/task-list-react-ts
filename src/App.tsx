import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';
import { ITodo } from './types/ITodo';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length) {
      setTodos([...todos, { id: Date.now(), todo: inputValue, isDone: false }]);
      setInputValue('');
    }
  }

  return (
    <div className="tasklist">
      <h1 className='tasklist__title'>
        TASK LIST
      </h1>
      <InputField inputValue={inputValue} setInputValue={setInputValue} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;