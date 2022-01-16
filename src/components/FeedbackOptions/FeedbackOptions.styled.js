import { styled } from 'common';
import { ButtonStyled } from 'common/components/Button';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(12px, 2.1vw, 28px);
`;

export const FeedbackOptionsItemStyled = styled.li``;

export const FeedbackBtnStyled = styled(ButtonStyled)`
  gap: clamp(4px, 2.1vw, 12px);
`;
