import { FC } from 'react';
import { Brace } from '../symbols';
import styles from './text.module.css';

export const Footer: FC = () => {
  return (
    <footer className="grid place-content-center pb-32">
      <p className={styles.text}>
        <Brace right />
      </p>
    </footer>
  );
};
