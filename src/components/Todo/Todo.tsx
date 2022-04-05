import React from 'react';
import { ITodo } from '../../types/ITodo';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';

interface TodoProps {
    todo: ITodo;
    setTodos: (todo: ITodo[]) => void;
    todos: ITodo[];
}

const Todo: React.FC<TodoProps> = ({ todo, todos, setTodos}) => {

  const isTodoDone = (id: number) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        return {...todo, isDone: !todo.isDone}
      } else {
        return todo
      }
    }))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='tasklist__todo'>
        <span className={`tasklist__todo-item ${todo.isDone ? 'isDone' : ''}`}>
            {todo.todo}
        </span>
        <div className='tasklist__todo-icons'>
            <AiFillEdit />
            <AiFillDelete onClick={() => deleteTodo(todo.id)} />
            <MdDone onClick={() => isTodoDone(todo.id)} />
        </div>
    </div>
  )
}

export default Todo