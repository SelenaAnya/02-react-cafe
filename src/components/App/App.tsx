import React, { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
import css from './App.module.css';

type VoteType = 'good' | 'neutral' | 'bad';

const App: React.FC = () => {
  const [votes, setVotes] = useState<{ [key in VoteType]: number }>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Calculating the total number of votes
  const totalVotes = votes.good + votes.neutral + votes.bad;

  // Calculating the percentage of positive feedback
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} />
      {totalVotes > 0 ? <VoteStats votes={votes} positiveRate={positiveRate} /> : <Notification />}
    </div>
  );
};

export default App;