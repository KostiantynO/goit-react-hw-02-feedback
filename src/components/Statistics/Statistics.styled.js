import { styled, theme } from 'common';

export const StatisticsStyled = styled.div`
  contain: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(12px, 2.1vw, 20px);
  max-width: 320px;
  padding: ${({ theme }) => theme.spacing(4, 0)};
  margin: 0 auto;
`;

export const StatListStyled = styled.ul`
  contain: content;
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.1vw, 20px);
  max-width: 320px;

  margin: 0 auto;
`;

export const StatItemStyled = styled.li`
  padding: clamp(4px, 2.1vw, 8px) clamp(16px, 2.1vw, 24px);

  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.lighterGrey};
  border-radius: ${({ theme }) => theme.spacing(1)};
  box-shadow: 1px 1px 3px 1px ${({ theme }) => theme.colors.lightGrey};
  ${({ theme }) => theme.transition('transform')};

  :hover,
  :focus-within {
    transform: scale(1.02);
  }

  p {
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const FeedbackStatStyled = styled.p`
  display: flex;
  flex-direction: column;
  gap: 8px;

  text-align: center;
`;
