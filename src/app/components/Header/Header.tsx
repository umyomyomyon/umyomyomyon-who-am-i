import { FC, useRef } from 'react';
import { HeaderText } from './HeaderText';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useScrollAmount } from '@/app/hooks/useScrollAmount';

export const Header: FC = () => {
  return (
    <header className="grid place-content-center h-screen sticky z-0">
      <HeaderContent />
    </header>
  );
};

const HeaderContent: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [, windowHight] = useWindowSize();
  const [scrollX, scrollY] = useScrollAmount();

  const calctop = (windowHeight: number, scrollY: number, domHeight: number): number => {
    const visibleHeight = windowHeight - scrollY;
    return (visibleHeight - domHeight) / 2;
  };

  const top = ref.current ? calctop(windowHight, scrollY, ref.current.clientHeight) : 0;

  return (
    <div className="sticky" style={{ top: top > 0 ? top : 0 }} ref={ref}>
      <HeaderText />
    </div>
  );
};
