import { FC } from 'react';

type Props = {
  right?: boolean;
};

export const Brace: FC<Props> = ({ right = false }) => {
  const brace = right ? '}' : '{';
  return <span className="text-brace">{brace}</span>;
};
