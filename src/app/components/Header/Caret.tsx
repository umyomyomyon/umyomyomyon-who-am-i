import { FC } from 'react';
import style from './caret.module.css';

export const Caret: FC = () => {
  return <span className={style.caret}>|</span>;
};
