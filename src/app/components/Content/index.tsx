import { FC } from 'react';
import { Fields } from '../Fields';
import { Icon } from '../Icon';
import { Brace } from '../symbols';

export const Content: FC = () => {
  return (
    <main className="flex min-h-[50vh] flex-col items-center">
      <Icon />
      <section className='relative'>
        <Fields />
        <div className='text-header caret-transparent w-full absolute left-[-8%] md:left-[-20%]'>
          <Brace right />
        </div>
      </section>
    </main>
  );
};
