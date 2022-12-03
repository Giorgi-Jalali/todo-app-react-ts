import { useRef } from "react";
import styled from "styled-components";
import plus from "../images/plus.svg";
import { CheckedCircle, EmptyCircle } from "./CheckedCircle";

const AddTodo: React.FC<{
  addTodoHandler: (text: string) => void;
  complete: boolean;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<any>;
}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText: any = todoTextInputRef.current?.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    props.addTodoHandler(enteredText);
  };
  const circleHandler: any = () => {
    props.setComplete(!props.complete);
  };

  const timeHandler = () => {
    const recentDate = new Date();
    const hoursMinutes = recentDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    props.setTime(hoursMinutes);
  };

  return (
    <AddNoteContainer onSubmit={submitHandler}>
      <InputDiv>
        {props.complete ? (
          <CheckedCircle onClick={circleHandler} />
        ) : (
          <EmptyCircle onClick={circleHandler} />
        )}
        <TodoInput
          type="text"
          id="text"
          placeholder="Add note here..."
          ref={todoTextInputRef}
          onChange={timeHandler}
        />
      </InputDiv>

      <PlusButton />
    </AddNoteContainer>
  );
};

export default AddTodo;

const AddNoteContainer = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const InputDiv = styled.div`
  background: #ebeff2;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
`;

const TodoInput = styled.input`
  background: transparent;
  color: #0d0d0d;
  font-size: 16px;
  line-height: 19px;
  outline: none;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  @media (min-width: 700px) {
    margin-left: 50px;
    width: 280px;
  }
`;

const PlusButton = styled.button`
  background-color: #20eeb0;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: center;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  cursor: pointer;
  @media (min-width: 700px) {
    padding: 15px 50px;
  }
`;
