import React from 'react';

import meditationBackground from '../../../icons/meditationBackground.png';
import MeditationContents from '../../meditation/MeditationContents';
import MeditationHeader from '../../meditation/MeditationHeader';
import HeaderBar from '../../common/HeaderBar';
import { useMeditation } from '../../store/meditation/Meditation_Store';

const Meditation = () => {
  const store = useMeditation();

  return (
    <div style={{ background: `url(${meditationBackground}) center/cover no-repeat` }}>
      {store.openDetail ? (
        <>
          <HeaderBar />
          <MeditationContents store={store} />
        </>
      ) : (
        <>
          <HeaderBar />
          <MeditationHeader />
          <MeditationContents store={store} />
        </>
      )}
    </div>
  );
};

export default Meditation;
