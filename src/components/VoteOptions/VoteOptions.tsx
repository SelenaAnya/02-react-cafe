import React, { useState } from 'react';
import css from './VoteOptions.module.css';

type VoteType = 'good' | 'neutral' | 'bad';

const VoteOptions: React.FC = () => {
  const [votes, setVotes] = useState<{ [key in VoteType]: number }>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => handleVote('good')}>
        Good 👍
      </button>
      <button className={css.button} onClick={() => handleVote('neutral')}>
        Neutral 😐
      </button>
      <button className={css.button} onClick={() => handleVote('bad')}>
        Bad 👎
      </button>
      <div className={css.stats}>
        <p>Good: {votes.good}</p>
        <p>Neutral: {votes.neutral}</p>
        <p>Bad: {votes.bad}</p>
      </div>
    </div>
  );
};

export default VoteOptions;