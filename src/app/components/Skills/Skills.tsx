import { FC } from 'react';
import { Colon, Bracket } from '../symbols';
import { SkillsContent } from './Content';

const skills = ['TypeScript', 'React', 'Redux', 'Next.js', 'Python', 'Django', 'GCP', 'Firebase'];

export const Skills: FC = () => {
  return (
    <li className="my-5 caret-transparent">
      <span className="text-property">skills</span>
      <Colon /> <Bracket />
      <SkillsContent skills={skills} />
      <Bracket right />
    </li>
  );
};
