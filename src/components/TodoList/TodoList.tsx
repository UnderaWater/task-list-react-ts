import React from 'react';
import { ITodo } from '../../types/ITodo';
import Todo from '../Todo/Todo';
import './styles.css'

interface TodoListProps {
    todos: ITodo[];
    setTodos: (todo: ITodo[]) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className='tasklist__todos'>
        {todos.map(todo => (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  )
}

export default TodoList