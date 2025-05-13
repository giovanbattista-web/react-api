import axios from "axios";
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => {
        setTodos(response.data);
        // console.log(response.data);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <div className="container ">
        <div className="row mb-4">
          <div className="col-12">
            <h1>ATTORI</h1>
          </div>
        </div>
        <div className="row g-3">
          {todos.map((todos) => (
            <div key={`todos ${todos.id}`} className="col-12 col-md-6 col-lg-4">
              <div className="card rounded-0 d-flex">
                <div className="todos-image">
                  <img src={todos.image} alt="" />
                </div>
                <div className="todos-info">
                  <h3 className="todos-name">{todos.name}</h3>
                  <h3 className="todos-birthYear">{todos.birth_year}</h3>
                  <h3 className="todos-nationality">{todos.nationality}</h3>
                  <h3 className="todos-biography">{todos.biography}</h3>
                  <h3 className="todos-awards">{todos.awards}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/*
        <ul className="list-group">
          {todos.map((todo) => {
            <li key={todo.id} className="list-group-item" >{todo.name}</li>
          })}
        </ul >
        */}
      </div>
    </>
  )
};

export default App;
