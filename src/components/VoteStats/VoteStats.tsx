import React from 'react';
import css from './VoteStats.module.css';

interface VoteStatsProps {
  votes: {
    good: number;
    neutral: number;
    bad: number;
  };
  positiveRate: number;
}

const VoteStats: React.FC<VoteStatsProps> = ({ votes, positiveRate }) => {
  return (
    <div className={css.stats}>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Positive Feedback: {positiveRate}%</p>
    </div>
  );
};

export default VoteStats;