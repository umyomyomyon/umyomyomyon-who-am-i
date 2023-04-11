import { FC } from 'react';
import { Colon, Equal, Brace } from '../symbols';
import { Caret } from './Caret';

export const HeaderText: FC = () => {
  return (
    <h1 className="text-header caret-transparent my-4">
      <span className="text-const">const</span> <span className="text-variable">umyomyomyon</span>
      <span className="hidden md:inline">
        <Colon /> <span className="text-type">WhoAmI</span>
      </span>{' '}
      <Equal /> <Brace />
      <Caret />
    </h1>
  );
};
