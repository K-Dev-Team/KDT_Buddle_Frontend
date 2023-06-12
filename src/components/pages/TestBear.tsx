import React from "react";

import { useTests } from '../store/useMain';

function TestBear() {
  const useTest: any = useTests();
  return (
    <div>
      Store Test
      {useTest.bears.state}
      <button type="button" onClick={useTest.bears.increase}>plus</button>
      <button type="button" onClick={useTest.bears.remove}>remove</button>
    </div>
  );
};

export default TestBear;
