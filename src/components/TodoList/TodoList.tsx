import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ITodo } from '../../types/ITodo';
import Todo from '../Todo/Todo';
import './styles.css'

interface TodoListProps {
  todos: ITodo[];
  setTodos: (todo: ITodo[]) => void;
  completedTodos: ITodo[];
  setCompletedTodos: (todo: ITodo[]) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className='tasklist__wrapper'>
      <Droppable droppableId='TodoList'>
        {
          (provided) => (
            <div className='tasklist__main' ref={provided.innerRef} {...provided.droppableProps} >
              <h2 className='tasklist__main-tittle'>Active Tasks</h2>
              <div className='tasklist__todos'>
                {todos.map((todo, index) => (
                  <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} index={index} />
                ))}
              </div>
            </div>
          )
        }
      </Droppable>
      <Droppable droppableId='TodoRemove'>
        {
          (provided) => (
            <div className='tasklist__main' ref={provided.innerRef} {...provided.droppableProps}>
              <h2 className='tasklist__main-tittle'>Completed Tasks</h2>
              <div className='tasklist__todos'>
                {completedTodos.map((todo, index) => (
                  <Todo key={todo.id} todo={todo} index={index} todos={completedTodos} setTodos={setCompletedTodos} />
                ))}
              </div>
            </div>
          )
        }
      </Droppable>
    </div>
  )
}

export default TodoList