import { useState } from 'react';

export const useMeditation = () => {
  const [openDetail, setOpenDetail] = useState(false);

  const state = { openDetail };
  const actions = {
    setOpenDetail,
  };
  const variables = {};
  return { ...state, actions, variables };
};
