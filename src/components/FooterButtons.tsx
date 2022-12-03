import styled from "styled-components";

const FooterButtons: React.FC<{
  allTodosHandler: () => void;
  activeTodoHandler: () => void;
  completeTodoHandler: () => void;
}> = (props) => {
  return (
    <FooterButtonsContainer>
      <All onClick={props.allTodosHandler}>All</All>
      <Active onClick={props.activeTodoHandler}>Active</Active>
      <Complete onClick={props.completeTodoHandler}>Complete</Complete>
    </FooterButtonsContainer>
  );
};

export default FooterButtons;

const FooterButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 10px 10px;
  padding: 10px;
  @media (min-width: 700px) {
    padding: 30px;
  }
`;

const All = styled.div`
  background: #1ac995;
  color: white;
  width: 30%;
  border-radius: 10px;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #20f5b6;
  }
`;

const Active = styled.div`
  background: #1ac995;
  color: white;
  width: 30%;
  border-radius: 10px;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #20f5b6;
  }
`;

const Complete = styled.div`
  background: #1ac995;
  color: white;
  width: 30%;
  border-radius: 10px;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #20f5b6;
  }
`;
