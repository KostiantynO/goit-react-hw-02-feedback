import { styled } from 'common';
import { ButtonStyled } from 'common/components/Button';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(16px, 2.1vw, 32px);
`;

export const FeedbackOptionsItemStyled = styled.li`
  padding: clamp(4px, 2.1vw, 8px);
`;

export const FeedbackBtnStyled = styled(ButtonStyled)``;
