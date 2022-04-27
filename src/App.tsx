import React, {FC, useState, useEffect} from 'react';

import List from "./toDoList/list";
import Form from "./toDoForm/form";
import TextLabel from "./label/textLabel";
import './App.css';

const App: FC = () => {
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem('todos');
    if (data) {
      return JSON.parse(data);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map((todo: any) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const counter = () => {
    const ids = todos.map((todo: any) => todo.id);
    return ids.length === 0 ? 1 : Math.max(...ids) + 1;
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, {id: counter(),text: newTodo, complete: false}]);
  };

  const removeTodo: RemoveTodo = (selectedTodo) => {
    setTodos(todos.filter((todo: any) => selectedTodo.id !== todo.id ))
  }

  return (
      <div className="App">
        <div className="label">
          <TextLabel/>
        </div>
        <div className="form">
          <Form addTodo={addTodo}/>
          <List todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        </div>
      </div>
  );
}

export default App;