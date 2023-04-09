import { FC } from 'react';
import { KV } from '../Fields/KV';

export const Fields: FC = () => {
  return (
    <ul className="list-none text-dynamic">
      <KV property="name" value={"'umyomyomyon'"} />
      <KV
        property="github"
        value={
          <span className="text-property underline">
            <a href="https://github.com/umyomyomyon" target="_blank" rel="noopener noreferrer">
              github.com/umyomyomyon
            </a>
          </span>
        }
      />
      <KV
        property="zenn"
        value={
          <span className="text-property underline">
            <a href="https://zenn.dev/umyomyomyon" target="_blank" rel="noopener noreferrer">
              zenn.dev/umyomyomyon
            </a>
          </span>
        }
      />
      <KV property="yearsOfExperience" value={<span className="text-number">3</span>} />
      <KV
        property="skills"
        value={
          <>
            <span className="text-brackets">[</span> <span className="text-other">...</span>{' '}
            <span className="text-brackets">]</span>
          </>
        }
      />
    </ul>
  );
};
