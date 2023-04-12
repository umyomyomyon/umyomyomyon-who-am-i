import { FC } from 'react';

type SkillsContentProps = {
  skills: string[];
};

export const SkillsContent: FC<SkillsContentProps> = ({ skills }) => {
  return (
    <div>
      {skills.map((skill) => (
        <Skill key={skill} skill={skill} />
      ))}
    </div>
  );
};

type SkillProps = {
  skill: string;
};

const Skill: FC<SkillProps> = ({ skill }) => {
  return <p className="text-variable pl-[8%]">{skill}</p>;
};
