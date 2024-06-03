import styled from "styled-components";
import { TitleText } from "../../styles/Main/BookStyle";
import { FlexCenter } from "../../styles/PageLayout";

export default function BookDetailCommu() {
  return (
    <div>
      <div>
        <TitleText style={{margin: '1.9rem 2rem'}}>커뮤니티</TitleText>
        <FlexCenter style={{flexDirection: 'column'}}>
          <div>
            <h4>LIB 님</h4>
            <div>
              <p>
                정말 재밌어서 오늘 사고 오늘 다 봤습니다! 말로서 위안을 얻거나
                깨달음을 얻고 싶은 분에게 추천드려요!
              </p>
              <span>
                2024-04-22
              </span>
            </div>
          </div>
          <span>펼쳐보기</span>
          <form>
            <textarea />
            <button>등록</button>
          </form>
        </FlexCenter>
      </div>
    </div>
  );
}
const CommuDiv = styled.div`

`
