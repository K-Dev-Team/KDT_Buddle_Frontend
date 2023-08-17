import { action } from 'mobx';
import React from 'react';

import Button from '../atoms/Button';
import { TestMobx_Store, doubler } from '../store/TestMobx_Store';

const TestMobx = () => {
  const store = TestMobx_Store();
  console.log(store);
  return (
    <div>
      <div>{store.doubler.value}</div>

      <Button
        onClick={action(() => {
          store.doubler.increment();
          console.log('클릭이벤트');
        })}
      >
        더블
      </Button>
    </div>
  );
};

export default TestMobx;
