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
      <Droppable droppableId='TodosList'>
        {
          (provided) => (
            <div
              className='tasklist__main green'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2 className='tasklist__main-tittle'>Active Tasks</h2>
              <div className='tasklist__todos'>
                {todos.map((todo, index) => (
                  <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} index={index} />
                ))}
              </div>
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {
          (provided) => (
            <div
              className='tasklist__main red'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2 className='tasklist__main-tittle'>Completed Tasks</h2>
              <div className='tasklist__todos'>
                {completedTodos.map((todo, index) => (
                  <Todo key={todo.id} todo={todo} index={index} todos={completedTodos} setTodos={setCompletedTodos} />
                ))}
              </div>
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
    </div>
  )
}

export default TodoList