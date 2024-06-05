import styled from "styled-components";
import { useState } from "react";
import { GiClover } from "react-icons/gi";
import { FlexCenter } from "../styles/PageLayout";

export default function StarNumber() {
  const [clicked, setClicked] = useState(0); // 몇 개의 별이 눌렀는지 저장
  const dummyList = [0, 1, 2, 3, 4]; // 항상 별이 5개가 보여지기 위해 더미를 만든다.
  const starClick = (index) => {
    setClicked(index + 1);
  }
  return (
    <FlexCenterStar>
      {dummyList.map((number) => (
        <GiClover
          key={number}
          onClick= {() => {starClick(number)}}
          style={{ color: number < clicked ? '#539165' : 'gray'}}
          size='25px'
        />
      ))}
      <StarNumberText> {clicked * 2} / 10 </StarNumberText>
    </FlexCenterStar>
  );
}
const FlexCenterStar = styled(FlexCenter)`
  margin: 0.7rem 1rem;
`
const StarNumberText = styled.span`
  margin: 0 0.8rem;
`