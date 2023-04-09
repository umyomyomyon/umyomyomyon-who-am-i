import { FC } from 'react';
import Image from 'next/image';
import iconImage from '../../../public/icon.jpg';

export const Icon: FC = () => {
  return (
    <div className="grid place-content-center place-items-center pb-8">
      <div className="w-6/12 sm:w-4/12 px-4">
        <Image
          alt="profile icon"
          width={iconImage.width}
          height={iconImage.height}
          src={iconImage.src}
          className="shadow rounded-full max-w-full h-auto align-middle border-none"
        />
      </div>
    </div>
  );
};
