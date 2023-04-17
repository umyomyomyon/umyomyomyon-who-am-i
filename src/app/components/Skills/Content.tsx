import { FC } from 'react';
import { Comma } from '../symbols';

type SkillsContentProps = {
  skills: string[];
};

export const SkillsContent: FC<SkillsContentProps> = ({ skills }) => {
  return (
    <div>
      {skills.map((skill) => (
        <p key={skill}>
          <Skill key={skill} skill={skill} />
          <Comma />
        </p>
      ))}
    </div>
  );
};

type SkillProps = {
  skill: string;
};

const Skill: FC<SkillProps> = ({ skill }) => {
  return <span className="text-variable pl-[8%] inline">{skill}</span>;
};
