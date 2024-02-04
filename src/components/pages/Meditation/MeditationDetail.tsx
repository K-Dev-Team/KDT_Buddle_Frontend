import React from 'react';
import { Modal } from '../../common/Modal';
import { meditaionIcons } from '../../../icons/meditaionIcons';
import { useMeditationDetail } from '../../store/meditation/meditationDetail_Store';
import * as S from '../../subStyleComponent/meditation/meditationDetailStyle';

export default function MeditationDetail() {
  const store = useMeditationDetail();
  return (
    <div>
      <S.HeadContainer>
        <S.DotTree onClick={store.actions.isSeeMoreDetailModalOpen}>{meditaionIcons.openModal.icon}</S.DotTree>
        <S.Title>당신에게 행복이란 무엇인가요?</S.Title>
        <S.Sub>~월 ~ 째주 한줄사색</S.Sub>
      </S.HeadContainer>
      <S.BodyContainer>
        <S.Contents>
          당신에게 행복이란 무엇인가요? 나에게 가장 행복한 순간, 내가 생각하는 행복 작고 사소한 생각이라도 좋아요.
          여러분들의 생각을 한 줄로 표현해보세요.
        </S.Contents>
        <S.CommentHead>
          <S.CountLike>{meditaionIcons.comment.icon}24</S.CountLike>
          <S.CountLike>
            <div>{meditaionIcons.arrowLeft.icon}</div>
            <div>{meditaionIcons.getList.icon}</div>
            <div>{meditaionIcons.arrowRight.icon}</div>
          </S.CountLike>
        </S.CommentHead>
        <S.Input>
          <S.InputText>당신의 한 줄을 남겨보세요</S.InputText>
          <S.SubmitButton>등록</S.SubmitButton>
        </S.Input>
        <S.ComentContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '305px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center' }}>
              <div style={{ width: '24px', height: '24px', backgroundColor: 'yellow' }}>그</div>
              <div>닉네임</div>
              <div style={{ color: '#979797' }}>3시간전</div>
            </div>
            <div style={{ marginBottom: '21px' }}>댓글입니다 . 레이아웃 잡기 빡세네요 ... 하 ...</div>
            <div
              style={{
                width: '110px',
                height: '18px',
                alignItems: 'center',
                gap: '6px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div>{meditaionIcons.emptyHeart.icon}</div>
                <div>좋아요</div>
              </div>
              <div>999+</div>
            </div>
          </div>
          <div>{meditaionIcons.emptyHeart.icon}</div>
        </S.ComentContainer>
      </S.BodyContainer>
      <Modal
        isOpen={store.seeMoreDetailModal}
        close={store.actions.isSeeMoreDetailModalClose}
        top={store.modalLodation.y}
        left={store.modalLodation.x - 203}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 5,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <S.MinusPlusContainer>{meditaionIcons.minus.icon}</S.MinusPlusContainer>
            <div style={{ margin: '0 19px' }}>작은글씨</div>
            <S.MinusPlusContainer>{meditaionIcons.plus.icon}</S.MinusPlusContainer>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>{meditaionIcons.bookmark.icon}보관함에 추가</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>{meditaionIcons.share.icon}공유하기</div>
        </div>
      </Modal>
    </div>
  );
}
