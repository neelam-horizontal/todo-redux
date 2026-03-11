import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/todoReducer';

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo({ id: Date.now(), text: newTodo, status: 'in-progress' }));
      setNewTodo('');
    }
  };

  return (
    <div className="mb-4">
      <input
        className="border border-slate-300 p-2 mr-2 w-9/12"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new ToDo item"
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;