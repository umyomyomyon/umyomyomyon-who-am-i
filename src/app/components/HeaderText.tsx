import { FC } from 'react';
import { Colon, Equal, Brace } from './symbols';
import { Caret } from './Caret';
import styles from './text.module.css';

export const HeaderText: FC = () => {
  return (
    <h1 className={styles.text}>
      <span className="text-const">const</span> <span className="text-variable">umyomyomyon</span>
      <span className="hidden md:inline">
        <Colon /> <span className="text-type">WhoAmI</span>
      </span>{' '}
      <Equal /> <Brace />
      <Caret />
    </h1>
  );
};
