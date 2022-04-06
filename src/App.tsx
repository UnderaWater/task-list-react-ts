import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';
import { ITodo } from './types/ITodo';
import { DragDropContext } from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<ITodo[]>([])

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length) {
      setTodos([...todos, { id: Date.now(), todo: inputValue, isDone: false }]);
      setInputValue('');
    }
  }

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="tasklist">
        <h1 className='tasklist__title'>
          TASK LIST
        </h1>
        <InputField inputValue={inputValue} setInputValue={setInputValue} addTodo={addTodo} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;