import { FC } from 'react';
import style from './cursor.module.css';

export const Caret: FC = () => {
  return <span className={style.cursor}>|</span>;
};
