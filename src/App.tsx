import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import TodoModel from "./components/todoModel";
import FooterButtons from "./components/FooterButtons";

export default function App() {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [complete, setComplete] = useState<boolean>(false);
  const [time, setTime] = useState<string>("");
  const [allTodos, setAllTodos] = useState<any>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new TodoModel(todoText, complete, time);
    const newFilteredTodo = new TodoModel(todoText, complete, time);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
    setAllTodos((prevTodos: any) => {
      return prevTodos.concat(newFilteredTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo: any) => todo.id !== todoId);
    });
    setAllTodos((prevTodos: any) => {
      return prevTodos.filter((todo: any) => todo.id !== todoId);
    });
  };

  const allTodosHandler = () => {
    setTodos(allTodos);
  };

  const activeTodoHandler = () => {
    setTodos(allTodos.filter((todo: any) => !todo.complete));
  };

  const completeTodoHandler = () => {
    setTodos(allTodos.filter((todo: any) => todo.complete));
  };

  return (
    <div>
      <GlobalStyle />
      <Title>Todo</Title>
      <Main>
        <Header />
        <TodoSection>
          <AddTodo
            setTime={setTime}
            addTodoHandler={addTodoHandler}
            complete={complete}
            setComplete={setComplete}
          />
          <Todos
            items={todos}
            removeTodo={removeTodoHandler}
            complete={complete}
            time={time}
          />
        </TodoSection>
        <FooterButtons
          allTodosHandler={allTodosHandler}
          activeTodoHandler={activeTodoHandler}
          completeTodoHandler={completeTodoHandler}
        />
      </Main>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #888888;
  }

  body {
    background: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 52px;
  line-height: 100px;
  color: #007fdb;
`;

const Main = styled.div`
  width: 375px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 40px;
  @media (min-width: 700px) {
    width: 600px;
  }
`;

const TodoSection = styled.div`
  padding: 20px;
  @media (min-width: 700px) {
    padding: 40px;
  }
`;
