import { FC } from 'react';
import { Colon, Comma } from '../symbols';

type Props = {
  property: string;
  value: string | JSX.Element;
};

export const KV: FC<Props> = ({ property, value }) => {
  return (
    <li className="my-5">
      <span className="text-property">{property}</span>
      <Colon /> <span className="text-string">{value}</span>
      <Comma />
    </li>
  );
};
