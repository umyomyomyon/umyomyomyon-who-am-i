import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<[number, number]>([0, 0]);
  useEffect(() => {
    const onResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return windowSize;
};

export const useOnScrollAmount = () => {
  const [scrollAmount, setScrollAmount] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const onScroll = () => {
      setScrollAmount([window.scrollX, window.scrollY]);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollAmount;
};
