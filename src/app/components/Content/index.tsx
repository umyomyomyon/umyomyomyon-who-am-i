import { FC } from 'react';
import { Fields } from '../Fields';
import { Icon } from '../Icon';

export const Content: FC = () => {
  return (
    <main className="flex min-h-[50vh] flex-col items-center">
      <Icon />
      <Fields />
    </main>
  );
};
