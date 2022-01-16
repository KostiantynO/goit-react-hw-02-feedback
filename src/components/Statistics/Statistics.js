import { PropTypes } from 'common';
import {
  StatisticsStyled,
  StatItemStyled,
  StatListStyled,
} from './Statistics.styled';

const ListItem = obj => (
  <StatItemStyled key={Object.keys(obj)}>
    <p>
      {Object.keys(obj)}: <span>{Object.values(obj)}</span>
    </p>
  </StatItemStyled>
);

const FeedbackStat = ({ label, score }) => (
  <p>
    {label}: <span>{score}</span>
  </p>
);

export const Statistics = ({
  good,
  neutral,
  bad,

  total,
  positivePercentage,
}) => {
  const options = [{ good }, { neutral }, { bad }];

  return (
    <StatisticsStyled>
      <StatListStyled>{options.map(ListItem)}</StatListStyled>

      <FeedbackStat label="Total" score={total} />
      <FeedbackStat
        label="Positive feedback"
        score={positivePercentage + '%'}
      />
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
