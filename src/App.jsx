import axios from "axios";
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <ul>
        {todos.map((todo) => {
          <li key={todo.id} >{todo.name}</li>
        })}
      </ul >

    </>
  )
};

export default App;
