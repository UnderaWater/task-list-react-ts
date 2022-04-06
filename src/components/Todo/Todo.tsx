import React, { useEffect, useRef, useState } from 'react';
import { ITodo } from '../../types/ITodo';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';
import { Draggable } from 'react-beautiful-dnd';

interface TodoProps {
  todo: ITodo;
  setTodos: (todo: ITodo[]) => void;
  todos: ITodo[];
  index: number;
}

const Todo: React.FC<TodoProps> = ({ todo, todos, setTodos, index }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null)

  const isTodoDone = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }
      } else {
        return todo
      }
    }))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, todo: editText }
      } else {
        return todo
      }
    }));
    setEdit(false);
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {
        (provided) => (
          <form
            className='tasklist__todo'
            onSubmit={(e) => handleEdit(e, todo.id)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {
              edit ? (
                <input
                  ref={inputRef}
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className='tasklist__todo-input'
                />
              ) : (
                <p className={`tasklist__todo-item ${todo.isDone ? 'isDone' : ''}`}>
                  {todo.todo}
                </p>
              )
            }
            <div className='tasklist__todo-icons'>
              <AiFillEdit onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit)
                }
              }} />
              <AiFillDelete onClick={() => deleteTodo(todo.id)} />
              <MdDone onClick={() => isTodoDone(todo.id)} />
            </div>
          </form>
        )
      }
    </Draggable>
  )
}

export default Todo