import React from "react";
import TodoItems from "./TodoItems";
import CompletedItems from "./CompletedItems";
import TodoInput from "./TodoInput";

const ToDoApp = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4 text-red-500 text-center">
        ToDo App
      </h1>
        <TodoInput />
      <div className="flex">
        <div className="ToDo-items mt-8 w-6/12 float-left pr-8">
          <TodoItems />
        </div>
        <div className="completed-items mt-8 w-6/12 float-right">
          <CompletedItems />
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;
