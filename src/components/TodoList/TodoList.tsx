import React from 'react';
import { ITodo } from '../../types/ITodo';
import './styles.css'

interface TodoListProps {
    todos: ITodo[];
    setTodos: (todo: ITodo[]) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className='tasklist__todos'>
        {todos.map(todo => (
            <div key={todo.id}>
                {todo.todo}
            </div>
        ))}
    </div>
  )
}

export default TodoList