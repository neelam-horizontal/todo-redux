import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveCompleted } from "../reducers/todoReducer";

const TodoItems = () => {
  const todoItems = useSelector((state) => state.todos.todoItems ?? []);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">ToDo Items</h2>
      {/* // todoItems.length === 0 ? (
      //   <div className="text-red-500">No data found</div>
      // ) : ( */}
      {
        todoItems.map((item) => (
          <div
            className="todo-item flex items-center justify-between mb-2"
            key={item.id}
          >
            {item.text}
            {/* <input type="checkbox" /> */}
            <button
              className="bg-blue-500 ml-3 mb-2 text-white px-4 py-1 rounded"
              onClick={() => dispatch(moveCompleted(item.id))}
            >
              Move
            </button>
          </div>
        ))
      // )
      }
    </div>
  );
};

export default TodoItems;
