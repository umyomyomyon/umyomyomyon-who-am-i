import React, { FC } from 'react';

type Props = {
  right?: boolean;
};

export const Bracket: FC<Props> = ({ right }) => {
  const bracket = right ? ']' : '[';
  return <span className="text-brackets">{bracket}</span>;
};
