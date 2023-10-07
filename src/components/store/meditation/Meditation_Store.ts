import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useMeditation = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const navi = useNavigate();

  const state = { openDetail };
  const actions = {
    setOpenDetail,
    goDetail: () => {
      navi('/meditation/detail');
    },
  };
  const variables = {};
  return { ...state, actions, variables };
};
