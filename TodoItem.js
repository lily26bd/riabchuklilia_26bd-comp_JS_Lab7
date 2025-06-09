import React from 'react';

function TodoItem({ task, onDelete }) {
  return (
    <li className="todo-item">
      {task}
      <button onClick={onDelete}>Видалити</button>
    </li>
  );
}

export default TodoItem;
