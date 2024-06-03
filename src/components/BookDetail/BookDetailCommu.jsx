import styled from "styled-components";
import { TitleText } from "../../styles/Main/BookStyle";
import { FlexCenter } from "../../styles/PageLayout";
import { LoginFormInput } from "../../styles/Login/LoginForm";

export default function BookDetailCommu() {
  return (
    <div>
      <div>
        <TitleText style={{ margin: "1.9rem 2rem" }}>커뮤니티</TitleText>
        <FlexCenterDiv>
          <CommuDiv>
            <h4 style={{margin: '0.5rem 0'}}>LIB 님</h4>
            <CommuContent>
              <p style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
                정말 재밌어서 오늘 사고 오늘 다 봤습니다! 말로서 위안을 얻거나
                깨달음을 얻고 싶은 분에게 추천드려요! 얻고 싶은 분에게
                추천드려요! 얻고 싶은 분에게 추천드려요! 얻고 싶은 분에게
                추천드려요! 얻고 싶은 분에게 추천드려요! ...
              </p>
              <CommuContentDate>
                <span>2024-04-22</span>
              </CommuContentDate>
            </CommuContent>
          </CommuDiv>
          <FlexCenter>
            <MoreButtonCommu>펼쳐보기</MoreButtonCommu>
          </FlexCenter>
          <CommuForm>
            <CommuInput type="text" placeholder="다양한 생각을 남겨보세요" />
            <CommuButton>등록</CommuButton>
          </CommuForm>
        </FlexCenterDiv>
      </div>
    </div>
  );
}
const FlexCenterDiv = styled(FlexCenter)`
  flex-direction: column;
`;
const CommuDiv = styled.div`
  width: 50rem;
  margin: 1.2rem;
`;
const CommuContent = styled.div`
  padding: 2.5rem 2.5rem 0;
  background-color: rgba(217, 217, 217, 0.2);
  border-radius: 7px;
`;
const CommuContentDate = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 0.7rem;
  padding: 1rem 0;
`;
const MoreButtonCommu = styled.span`
  background-color: #ebebeb;
  margin: 1rem;
`;
const CommuForm = styled.form`
  width: 50rem;
`;
const CommuInput = styled(LoginFormInput)`
  width: 85%;
`;
const CommuButton = styled.button`
  margin-left: 0.6rem;
  padding: 1rem;
  background-color: #539165;
  font-size: 1rem;
  color: #ffffff;
  border: none;
  border-radius: 7px;
`;
