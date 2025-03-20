import React, { useState, useEffect } from "react";

const App = () => {
  const [newTodo, setNewTodo] = useState(["Apple", "Mango"]);
  const [inputValue, setInputValue] = useState("");

  const handleOnclick = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    setNewTodo([...newTodo, inputValue]);
    setInputValue("");
  };

  const handleRemove = (index) => {
    setNewTodo(newTodo.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Todo Application
        </h1>
        <form onSubmit="" className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-grow p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={handleOnclick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
          >
            Add
          </button>
        </form>
        <hr className="my-4 border-gray-300" />
        <div className="space-y-3">
          {newTodo.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-blue-100 p-3 rounded-lg shadow-md"
            >
              <p className="text-gray-700 font-medium">{item}</p>
              <button
                onClick={() => handleRemove(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow-md"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
