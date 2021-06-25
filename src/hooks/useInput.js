import { useState, useCallback } from 'react';

function useInput(initialValue) {
  const [data, setData] = useState(initialValue);

  const handler = useCallback(
    (e) => {
      const { value, name } = e.target;
      setData({
        ...data,
        [name]: value
      });
    },
    [data]
  );
  const inputReset = useCallback(() => setData(initialValue), [initialValue]);
  return [data, handler, inputReset];
}

export default useInput;
