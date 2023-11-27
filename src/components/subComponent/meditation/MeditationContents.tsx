import React from 'react';
import meditationBackground from '../../../icons/meditationBackground.png';
import { meditaionIcons } from '../../../icons/meditaionIcons';
import Col from '../../common/Col';
import Row from '../../common/Row';
import * as S from '../../subStyleComponent/meditation/meditationContentsStyle';

export default function MeditationContents({ store }: any) {
  return (
    <S.ContentsBackground style={{ background: `url(${meditationBackground}) center/cover no-repeat` }}>
      <Col style={{ padding: '30px 20px' }}>
        <S.Line1>6월 둘째주</S.Line1>
        <S.Line2>당신에게 행복이란 무엇인가요?</S.Line2>
        <S.Line3>베스트 댓글</S.Line3>
        <S.List>
          <S.Item onClick={store.actions.goDetail}>
            <span>1</span>여러분의 생각을 한 줄로 남겨주세요 <div>{meditaionIcons.emptyHeart.icon}</div>
          </S.Item>
          {store.openDetail ? (
            <>
              <S.Item>
                <span>2</span>가족들과 대화하며 맛있는 저녁을 먹을 때 가장 행복해요 ㅎㅎ 특히 내가{' '}
                <div>{meditaionIcons.emptyHeart.icon}</div>
              </S.Item>

              <S.Item>
                <span>3</span>강아지와 함께 산책할 때 <div>{meditaionIcons.emptyHeart.icon}</div>
              </S.Item>

              <S.Item>
                <span>4</span>맛있는 거 먹으면서 드라마 정주행 <div>{meditaionIcons.emptyHeart.icon}</div>
              </S.Item>
            </>
          ) : (
            <S.ArrowIconPosition
              onClick={() => {
                store.actions.setOpenDetail(true);
              }}
            >
              <div>{meditaionIcons.arrowDown.icon}</div>
            </S.ArrowIconPosition>
          )}
        </S.List>
        <Row>한줄남기러 가기</Row>
      </Col>
    </S.ContentsBackground>
  );
}
