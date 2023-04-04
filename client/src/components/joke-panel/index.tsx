import { FC } from 'react';

interface JokePanelProps {
  joke: string;
}

const JokePanel: FC<JokePanelProps> = ({ joke }) => {
  return (
    <div>
      <p className='max-w-lg'>{joke}</p>
    </div>
  );
};

export default JokePanel;
