import { useState } from "react";
import { TitleText } from "../../styles/Main/BookStyle";
import styled from "styled-components";
import { FlexCenter } from "../../styles/PageLayout";
import { BookDetailinfoDiv } from "./BookDetailInfo";
import { MoreButton, MoreButtonForm } from "../MyRecord/MyStudyWrapper";

export default function BookDetailContent() {
  const [bookContent, setBookContent] = useState(
    "짧은 경구와 산문체의 글 토막에서도 나타나는 니체의 명문장을 담았다. 100년도 지난 인물의 글에서 아직까지도 현대의 우리가 깨달음을 얻을 수 있다는 건 니체의 시대를 뛰어넘는 날카로운 통찰력 때문일 것이다. 니체의 글들은 핵심을 찌르는 듯 날카로운 시점, 강인한 생기, 불굴의 영혼, 보다 높은 곳을 향해 나아가려는 굳은 의지를 참신하고 짧은 명문장에 고스란히 담아낸다.번역을 뛰어넘는 번역을 보여주며 저자 사라토리 하루히코는 니체의 명언 가운데 우리 현대인의 이성과 감성을 흔들며 때로는 위로가 되기도 때로는 매서운 질타가 되는 백미만 꼽아 이 책을 엮었다.이미 일본에서 70만부 판매 실적을 내고 있는 중인 이 책은 다른 철학자들과는 달리 긴 장문의 철학서보다 단편과 짧은 산문체로 엮은 글을 많이 썼던 니체만의 강력한 매력을 담뿍 느끼게 한다 ···   "
  );
  return (
    <BookDetailinfoDiv>
      <div>
        <TitleText style={{margin: '1.9rem 2rem'}}>책 소개</TitleText>
        <FlexCenter>
          <BookContent>{bookContent}</BookContent>
        </FlexCenter>
        <MoreButtonForm>
          <MoreButton style={{margin: '1.7rem 1rem'}}>펼쳐보기</MoreButton>
        </MoreButtonForm>
      </div>
    </BookDetailinfoDiv>
  );
}
const BookContent = styled.p`
  width: 85%;
  height: 18rem;
  margin: 2rem 2rem 0;
  font-size: 20px;
  line-height: 35px;
  
`
