import { FC } from 'react';
import { HeaderText } from './HeaderText';

export const Header: FC = () => {
  return (
    <header className="grid place-content-center h-screen">
      <HeaderContent />
    </header>
  );
};

const HeaderContent: FC = () => {
  return (
    <div className="sticky top-0">
      <HeaderText />
    </div>
  );
};
