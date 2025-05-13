import axios from "axios";
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => setTodos(response.data));

  }
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
