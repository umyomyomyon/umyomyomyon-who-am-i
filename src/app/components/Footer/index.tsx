import { FC } from 'react';
import { Brace } from '../symbols';

export const Footer: FC = () => {
  return (
    <footer className="grid place-content-center pb-32">
      <p className="text-header caret-transparent my-4 w-[21ch] md:w-[29ch]">
        <Brace right />
      </p>
    </footer>
  );
};
