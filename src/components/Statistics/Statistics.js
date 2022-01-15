import { PropTypes } from 'common';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul>
        <li>
          <p>
            Good: <span>{good}</span>
          </p>
        </li>

        <li>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
        </li>

        <li>
          <p>
            Bad: <span>{bad}</span>
          </p>
        </li>
      </ul>

      <p>
        Total: <span>{total}</span>
      </p>

      <p>
        Positive feedback: <span>{positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};