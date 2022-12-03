import { useState } from "react";
import styled from "styled-components";
import { CheckedCircle, EmptyCircle } from "./CheckedCircle";
import trash from "../images/trash.jpg";

interface Props {
  text: string;
  removeTodo: () => void;
  completeTodo: boolean;
  time: string;
}

const TodoItem: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState<boolean>(props.completeTodo);

  const TodoCheckHandler = () => {
    setChecked(!checked);
  };

  return (
    <NoteContainer>
      <NoteNameDate>
        <Name>{props.text}</Name>
        <Date>{props.time ? `Today at ${props.time}` : ""}</Date>
      </NoteNameDate>
      <Icons>
        {checked ? (
          <CheckedCircle onClick={TodoCheckHandler} />
        ) : (
          <EmptyCircle onClick={TodoCheckHandler} />
        )}
        <Trash onClick={props.removeTodo} />
      </Icons>
    </NoteContainer>
  );
};

export default TodoItem;

const NoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const NoteNameDate = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  color: #0d0d0d;
`;

const Date = styled.div`
  font-size: 14px;
  line-height: 17px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Trash = styled.div`
  width: 20px;
  height: 20px;
  background: url(${trash});
  background-size: contain;
  margin-left: 15px;
  cursor: pointer;
`;
