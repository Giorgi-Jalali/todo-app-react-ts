import styled from "styled-components";
import headerImage from "../images/cover.png";

export default function Header() {
  const recentDate: any = new Date();
  const weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const weekDay: number = recentDate.getDay();
  const monthDay: number = recentDate.getDate();
  const hoursMinutes: any = recentDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <Head>
      <WeekDay>{`${weekDays[weekDay]} ${monthDay}`}</WeekDay>
      <Time>{hoursMinutes}</Time>
    </Head>
  );
}

const Head = styled.div`
  background: url(${headerImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  font-family: "Russo One", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 20px;
  padding-bottom: 10px;
`;

const WeekDay = styled.div`
  color: cadetblue;
  @media (min-width: 700px) {
    font-size: 26px;
    line-height: 30px;
  }
`;

const Time = styled.div`
  font-size: 36px;
  line-height: 50px;
  color: lightseagreen;
  @media (min-width: 700px) {
    font-size: 42px;
    line-height: 60px;
  }
`;
