import { FC } from 'react';
import { Brace } from '../symbols';

export const Footer: FC = () => {
  return (
    <footer className="grid place-content-center pb-32">
      <p className="text-header caret-transparent my-4">
        <Brace right />
      </p>
    </footer>
  );
};
