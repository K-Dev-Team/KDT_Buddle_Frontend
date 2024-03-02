import Col from '../../common/Col';
import ColSpace from '../../common/ColSpace';
import Row from '../../common/Row';
import * as S from '../../subStyleComponent/channel/OneLineContensStyle';

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

function OneLineContens() {
  return (
    <S.Outer>
      {testArr?.map((item, idx) => {
        return (
          <S.Inner key={idx}>
            <Row>
              <Col>
                <S.Subject>{item.subject}</S.Subject>
                <ColSpace marginTop="7" />
                <S.Contents>{item.contents}</S.Contents>
                <ColSpace marginTop="10" />
                <Row>
                  <div>{S.CommentIcon.icon}</div>
                  <S.CommentCount>{item.commentCount}</S.CommentCount>
                  <div>{S.BookmarkIcon.icon}</div>
                  <S.CommentCount>{item.bookmarkCount}</S.CommentCount>
                </Row>
              </Col>
              <S.PrePic>s</S.PrePic>
            </Row>
          </S.Inner>
        );
      })}
    </S.Outer>
  );
}

export default OneLineContens;
