import React, { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>📋 Список справ</h1>
      <div className="input-group">
        <input
          type="text"
          value={input}
          placeholder="Введіть справу..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Додати</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
