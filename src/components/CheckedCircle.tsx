import styled from "styled-components";
import tick from "../images/tick.png";
import emptyCircle from "../images/empty-circle.png";

////////////////

const CheckedCircle = styled.div`
  background: url(${tick});
  background-size: 9px 7px;
  background-position: center;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  background-color: #20eeb0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

////////////////

const EmptyCircle = styled.div`
  width: 20px;
  height: 20px;
  background: url(${emptyCircle});
  background-size: contain;
  cursor: pointer;
`;

export { CheckedCircle, EmptyCircle };
