import { MouseEvent, useState } from 'react';

export const useMeditationDetail = () => {
  const [seeMoreDetailModal, setSeeMoreDetailModal] = useState(false);
  const [modalLodation, setModalLodation] = useState({ x: 0, y: 0 });

  const state = { seeMoreDetailModal, modalLodation };
  const actions = {
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
