import { PropTypes } from 'common';
import {
  FeedbackOptionsList,
  FeedbackOptionsItemStyled,
  FeedbackBtnStyled,
} from './FeedbackOptions.styled';

const FeedbackBtn = ({ ...props }) => {
  return <FeedbackBtnStyled {...props} />;
};

const OptionItem = (option, onLeaveFeedback) => (
  <FeedbackOptionsItemStyled key={option}>
    <FeedbackBtn name={option} onClick={onLeaveFeedback}>
      {option}
    </FeedbackBtn>
  </FeedbackOptionsItemStyled>
);

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log('FeedbackOptions ~ options', options);
  return (
    <div>
      <FeedbackOptionsList>
        {options.map(option => OptionItem(option, onLeaveFeedback))}
      </FeedbackOptionsList>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
