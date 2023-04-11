import React, { FC, ReactNode, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
  steps: number;
  duration: number;
};

const useRevealPercentage = (steps: number, duration: number) => {
  const [num, setNum] = useState<number>(0);
  useEffect(() => {
    const ms = duration * 1000;
    const interval = ms / steps;
    const intv = setInterval(() => {
      const p = 100 / steps;
      setNum((num) => {
        if (num <= 100) {
          return num + p;
        }
        clearInterval(intv);
        return num;
      });
    }, interval);
  }, [steps, duration]);

  return num;
};

export const TypingWrapper: FC<Props> = ({ children, steps, duration }) => {
  const rp = useRevealPercentage(steps, duration);
  return <div style={{ clipPath: `inset(0px ${100 - rp}% 0px 0px)` }}>{children}</div>;
};
