import React from 'react';
import MeditationHeader from '../meditation/MeditationHeader';
import MeditationContents from '../meditation/MeditationContents';
import { useMeditation } from '../store/meditation/Meditation_Store';
import HeaderBar from '../common/HeaderBar';
import meditationBackground from '../../icons/meditationBackground.png';

const Meditation = () => {
  const store = useMeditation();

  return (
    <div style={{ background: `url(${meditationBackground}) center/cover no-repeat` }}>
      <HeaderBar />
      {store.openDetail ? (
        <MeditationContents store={store} />
      ) : (
        <>
          <MeditationHeader />
          <MeditationContents store={store} />
        </>
      )}
    </div>
  );
};

export default Meditation;
