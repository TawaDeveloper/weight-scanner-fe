import { useState, useEffect } from 'react';

const useResizeWidth = (element: HTMLElement) => {
  const [clientWidth, setClientWidth] = useState<number>(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      setClientWidth(entry.target.clientWidth);
    });

    resizeObserver.observe(element);
  }, [element]);

  return clientWidth;
};

export default useResizeWidth;
