import React, { useState } from "react";
import "./App.css";

function App() {
  // State variables for the list of items and the current input value
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Handler function to update the input value state
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handler function to add a new item to the list
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
