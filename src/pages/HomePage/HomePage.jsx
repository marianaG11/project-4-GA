import React, { useState, useEffect } from "react";
import Greeting from "../../components/Greeting/Greeting";
import SideBar from "../../components/SideBar/SideBar";
import AddTodoForm from "../../components/AddTodoForm/AddTodoForm";
import TodosDisplay from "../../components/TodosDisplay/TodosDisplay";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import * as todoApi from "../../utils/todoApi/todoApi";

import { Grid } from "semantic-ui-react";


export default function HomePage({user, handleLogout}){
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // C create in Crud
  // we invoke this function in addPost component when the submit button on our form is clicked
  // so we need to pass it as a prop
  async function handleAddTodo(todo) {
    try {
      setLoading(true);
      const data = await todoApi.create(todo); // our server is going to return
      // the created post, that will be inside of data, which is the response from
      // the server, we then want to set it in state
      console.log(data, " this is response from the server, in handleAddPost");
      setTodos([data.todo, ...todos]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }
   // R read in crud
   async function getTodos() {
    try {
      const data = await todoApi.getAll();
      console.log(data, " this is data,");
      setTodos([...data.todos]);
      setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }
  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getTodos();
  }, []);



  if (error) {
    return (
      <>
        <SideBar handleLogout={handleLogout} user={user}/>
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <SideBar handleLogout={handleLogout} user={user}/>
        <Loading />
      </>
    );
  }


return (
  <div className="flex">
    <AddTodoForm handleAddTodo={handleAddTodo}/>
    <TodosDisplay />
    <Greeting handleLogout={handleLogout} user={user}/>
    <SideBar handleLogout={handleLogout} user={user}/>
  </div>
  )
};
