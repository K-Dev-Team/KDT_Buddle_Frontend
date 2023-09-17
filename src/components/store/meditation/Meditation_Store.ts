import { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

export const useMeditation = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const navi = useNavigate();
=======

export const useMeditation = () => {
  const [openDetail, setOpenDetail] = useState(false);
>>>>>>> develop

  const state = { openDetail };
  const actions = {
    setOpenDetail,
<<<<<<< HEAD
    goDetail: () => {
      navi('/meditation/detail');
    },
=======
>>>>>>> develop
  };
  const variables = {};
  return { ...state, actions, variables };
};
