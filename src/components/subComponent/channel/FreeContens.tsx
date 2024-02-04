import Col from '../../common/Col';
import ColSpace from '../../common/ColSpace';
import Row from '../../common/Row';
import * as S from '../../subStyleComponent/channel/FreeContentsStyle';
import * as P from '../../subStyleComponent/channel/OneLineContensStyle';
const testArr = [
  {
    subject: '주제 제목 주제 제목 제목',
    contents:
      '6월 첫째주 한 줄 사색 | 안녕하세요. 당신에게 행복이란 무엇인가요? 나에게 가장 행복한 순간, 내가 생각하는행복',
    commentCount: 24,
    bookmarkCount: 34,
  },
  {
    subject: '주제 제목 주제 제목 제목',
    contents:
      '6월 첫째주 한 줄 사색 | 안녕하세요. 당신에게 행복이란 무엇인가요? 나에게 가장 행복한 순간, 내가 생각하는행복',
    commentCount: 24,
    bookmarkCount: 34,
  },
  {
    subject: '주제 제목 주제 제목 제목',
    contents:
      '6월 첫째주 한 줄 사색 | 안녕하세요. 당신에게 행복이란 무엇인가요? 나에게 가장 행복한 순간, 내가 생각하는행복',
    commentCount: 24,
    bookmarkCount: 34,
  },
  {
    subject: '주제 제목 주제 제목 제목',
    contents:
      '6월 첫째주 한 줄 사색 | 안녕하세요. 당신에게 행복이란 무엇인가요? 나에게 가장 행복한 순간, 내가 생각하는행복',
    commentCount: 24,
    bookmarkCount: 34,
  },
  {
    subject: '주제 제목 주제 제목 제목',
    contents:
      '6월 첫째주 한 줄 사색 | 안녕하세요. 당신에게 행복이란 무엇인가요? 나에게 가장 행복한 순간, 내가 생각하는행복',
    commentCount: 24,
    bookmarkCount: 34,
  },
];

function FreeContents() {
  return (
    <ColSpace marginTop="25">
      <Row>
        <S.FilterTagContainer>
          <S.FilterTagTypo>모든주제</S.FilterTagTypo>
        </S.FilterTagContainer>
        <S.FilterTagContainer>
          <S.FilterTagTypo>모든주제</S.FilterTagTypo>
        </S.FilterTagContainer>
        <S.FilterTagContainer>
          <S.FilterTagTypo>모든주제</S.FilterTagTypo>
        </S.FilterTagContainer>
      </Row>
      <P.Outer>
        {testArr?.map((item, idx) => {
          return (
            <P.Inner key={idx}>
              <Row>
                <Col>
                  <P.Subject>{item.subject}</P.Subject>
                  <ColSpace marginTop="7" />
                  <P.Contents>{item.contents}</P.Contents>
                  <ColSpace marginTop="10" />
                  <Row>
                    <div>{P.CommentIcon.icon}</div>
                    <P.CommentCount>{item.commentCount}</P.CommentCount>
                    <div>{P.BookmarkIcon.icon}</div>
                    <P.CommentCount>{item.bookmarkCount}</P.CommentCount>
                  </Row>
                </Col>
                <P.PrePic>s</P.PrePic>
              </Row>
            </P.Inner>
          );
        })}
      </P.Outer>
    </ColSpace>
  );
}

export default FreeContents;
