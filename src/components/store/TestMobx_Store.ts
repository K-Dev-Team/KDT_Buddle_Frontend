import { makeObservable, observable, computed, action, flow } from 'mobx';

import { makeAutoObservable } from 'mobx';

function createDoubler(value: number) {
  return makeAutoObservable({
    value,
    get double() {
      return this.value * 2;
    },
    increment() {
      this.value++;
    },
  });
}

export const doubler = createDoubler(0);

export const TestMobx_Store = () => {
  return {
    doubler,
  };
};
