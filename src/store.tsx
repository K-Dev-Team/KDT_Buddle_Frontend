import create from 'zustand';

interface SelectContentState {
  selectContent: number;
  setSelectContent: (select: number) => void;
}

// create를 이용해서 store을 생상헐 수 있으며, 다수의 store도 생성 가능하다.
export const useStore = create<SelectContentState>((set) => ({
  // create 함수의 매개변수로 콜백함수를 받는데 이 콜백함수의  return객체에 state,
  // setState를 넣는다.
  selectContent: window.localStorage.getItem('select') ? 
  	Number(window.localStorage.getItem('select')) : 0,
  setSelectContent: (select) => {
    set((state) => ({ ...state, selectContent: select }));
  },
}));
