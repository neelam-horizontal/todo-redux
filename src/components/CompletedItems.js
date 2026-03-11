import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveBack } from "../reducers/todoReducer";

const CompletedItems = () => {
  const completedItems = useSelector((state) => state.todos.completedItems ?? []);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Completed Items</h2>
      {completedItems.length === 0 ? (
        <div className="text-red-500">No data found</div>
      ) : (
        completedItems.map((item) => (
          <div
            className="todo-item flex items-center justify-between mb-2"
            key={item.id}
          >
            {item.text}
            <button
              className="bg-blue-500 ml-3 mb-2 text-white px-4 py-1 rounded"
              onClick={() => dispatch(moveBack(item.id))}
            >
              Move Back
            </button>
          </div>
        ))
        )
    }
    </div>
  );
};

export default CompletedItems;
