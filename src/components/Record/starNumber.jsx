import styled from "styled-components";
import { GiClover } from "react-icons/gi";
import { useState } from "react";

export default function StarNumber() {
  const [rating, setRating] = useState(0);
  const dummyList = [0, 1, 2, 3, 4]; // 항상 별이 5개가 보여지기 위해 더미를 만든다.
  const starClick = (index) => {
    setRating(index + 1);
  };
  return (
    <FlexCenterStar>
      {dummyList.map((number) => (
        <GiClover
          key={number}
          onClick={() => {
            starClick(number);
          }}
          style={{ color: number < rating ? "#539165" : "gray" }}
          size='25px'
        />
      ))}
      <StarNumberText> {rating} / 5 </StarNumberText>
    </FlexCenterStar>
  );
}
const FlexCenterStar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const StarNumberText = styled.span`
  margin: 0 0 0 0.5rem;
`;
