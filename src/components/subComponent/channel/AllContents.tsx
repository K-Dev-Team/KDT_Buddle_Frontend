import Col from '../../common/Col';
import React from 'react';
import * as S from '../../subStyleComponent/channel/AllContensStyle';
import ColSpace from '../../common/ColSpace';
import Row from '../../common/Row';
import RowSpace from '../../common/RowSpace';

const test = [
  {
    title: '7월 첫째주',
    key: '1',
    nick: '닉네임',
    contents: '베스트 댓글 베스트 댓글 베스트 댓글 베스트 댓글 베스트 댓글 베스트 댓글 베스트 댓글',
  },
  {
    title: '8월 첫째주',
    key: '2',
    nick: '닉네임',
    contents: '베스트 댓글 베스트 댓글 베스트 댓글 베스트 댓글 베스트 댓글 베스트 댓글 베스트 댓글',
  },
];

function AllContents() {
  return (
    <div>
      <ColSpace marginTop="50">
        <Col>
          <S.MiddleSubject>한줄 사색 베스트 댓글</S.MiddleSubject>
          <ColSpace marginTop="20" />
          <Row>
            {test?.map((item) => (
              <Col key={item.key}>
                <S.CommentBoxHead>
                  <S.WeekText>{item.title}</S.WeekText>
                </S.CommentBoxHead>
                <S.CommentBoxBody>
                  <Row>
                    <S.ProfilePic />
                    <S.ProfileName>{item.nick}</S.ProfileName>
                  </Row>
                  <ColSpace marginTop="12" />
                  <S.CommentBest>{item.contents}</S.CommentBest>
                </S.CommentBoxBody>
              </Col>
            ))}
          </Row>
          <ColSpace marginTop="50" />
          <S.MiddleSubject>자유 채널 인기글</S.MiddleSubject>
          <ColSpace marginTop="20" />
          <S.ContentsContainer>
            <S.ContentsInner>
              <S.ContentsNumber>1</S.ContentsNumber>
              <S.Contents>
                <S.ContentsHead>글 제목 글 제목 글 제목</S.ContentsHead>
                <S.ContentsBody>
                  글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글 내용 글
                </S.ContentsBody>
                <Row>
                  <S.LikeStyle>공감</S.LikeStyle>
                  <S.LikeStyle>00</S.LikeStyle>
                  <RowSpace marginLeft="15" />
                  <S.CommentStyle>댓글</S.CommentStyle>
                  <S.CommentStyle>00</S.CommentStyle>
                </Row>
              </S.Contents>
            </S.ContentsInner>
          </S.ContentsContainer>
        </Col>
      </ColSpace>
    </div>
  );
}

export default AllContents;
