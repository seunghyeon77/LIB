import styled from "styled-components";

export default function PresentDate() {
  const date = new Date();
  const presentDate = `${date.getFullYear()}년 
    0${date.getMonth() + 1}월 
    ${date.getDate()}일`;

  return <div>
    <PresentDateSpan>
      {presentDate}
    </PresentDateSpan>
  </div>;
}

const PresentDateSpan = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`
