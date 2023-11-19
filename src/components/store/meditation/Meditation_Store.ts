import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useMeditation = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const navi = useNavigate();
  const [seeMoreDetailModal, setSeeMoreDetailModal] = useState(false);
  const [modalLodation, setModalLodation] = useState({ x: 0, y: 0 });
  // const;
  const state = { openDetail, seeMoreDetailModal, modalLodation };
  const actions = {
    setOpenDetail,
    goDetail: () => {
      navi('/meditation/detail');
    },
    isSeeMoreDetailModalOpen: (e: MouseEvent<HTMLDivElement>) => {
      console.log(e);
      setModalLodation({ x: e.clientX, y: e.clientY });
      setSeeMoreDetailModal(true);
    },
    isSeeMoreDetailModalClose: () => {
      setSeeMoreDetailModal(false);
    },
  };
  const variables = {};
  return { ...state, actions, variables };
};
