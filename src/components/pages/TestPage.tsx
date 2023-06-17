import React from 'react';

import { useStore } from '../store/store';

function TestPage() {
  const { selectContent, setSelectContent } = useStore();
  return (
    <div>
      <h3>testPage</h3>
      <div>{selectContent}</div>
      <button type="button" onClick={() => setSelectContent(selectContent + 1)}>
        더하기버튼
      </button>
    </div>
  );
}

export default TestPage;