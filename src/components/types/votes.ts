export type VoteType = 'good' | 'neutral' | 'bad';

export interface VoteStats {
  good: number;
  neutral: number;
  bad: number;
}