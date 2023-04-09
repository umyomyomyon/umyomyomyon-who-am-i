import { useEffect, useState } from 'react';

export const useScrollAmount = () => {
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
