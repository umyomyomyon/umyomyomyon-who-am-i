import { FC } from 'react';
import iconImage from '../../assets/icon.jpg';

export const Icon: FC = () => {
  return (
    <div className="grid place-content-center place-items-center pb-8">
      <div className="w-6/12 sm:w-4/12 px-4">
        <img
          src={iconImage.src}
          width={iconImage.width}
          height={iconImage.height}
          alt="profile icon"
          className="shadow rounded-full max-w-full h-auto align-middle border-none"
        />
      </div>
    </div>
  );
};
