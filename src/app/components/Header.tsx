import { FC } from 'react';
import { HeaderText } from './HeaderText';

export const Header: FC = () => {
  return (
    <header className="grid place-content-center h-screen">
      <HeaderText />
    </header>
  );
};
