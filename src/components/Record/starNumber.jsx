import styled from "styled-components";
import { GiClover } from "react-icons/gi";

export default function StarNumber({rating, setRating}) {
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
          size="25px"
        />
      ))}
      <StarNumberText> {rating} / 5 </StarNumberText>
    </FlexCenterStar>
  );
}
const FlexCenterStar = styled.div`
  margin: 0.7rem 1rem;
`;
const StarNumberText = styled.span`
  margin: 0 0.8rem;
`;
