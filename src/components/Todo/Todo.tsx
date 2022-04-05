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
  return (
    <div className='tasklist__todo'>
        <span className='tasklist__todo-item'>
            {todo.todo}
        </span>
        <div className='tasklist__todo-icons'>
            <AiFillEdit />
            <AiFillDelete />
            <MdDone />
        </div>
    </div>
  )
}

export default Todo