import { FC, useState } from 'react';
import { Comma, Colon } from '../symbols';
import { SkillsContent } from './Content';

const skills = ['TypeScript', 'React', 'Redux', 'Next.js', 'Python', 'Django', 'GCP', 'Firebase'];

export const Skills: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="my-5 caret-transparent">
      <details className="cursor-pointer" onClick={handleClick}>
        <summary className="list-none">
          <span className="text-property">skills</span>
          <Colon /> <SkillsValue isOpen={isOpen} />
          {isOpen && (
            <>
              <SkillsContent skills={skills} />
              <span className="text-brackets">]</span>
            </>
          )}
        </summary>
      </details>
    </li>
  );
};

type ValueProps = {
  isOpen: boolean;
};

const SkillsValue: FC<ValueProps> = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <OpenSkills />
      ) : (
        <>
          <ClosedSkills />
          <Comma />
        </>
      )}
    </>
  );
};

const ClosedSkills: FC = () => {
  return (
    <>
      <span className="text-brackets">[</span> <span className="text-other">...</span>{' '}
      <span className="text-brackets">]</span>
    </>
  );
};

const OpenSkills: FC = () => {
  return <span className="text-brackets">[</span>;
};
