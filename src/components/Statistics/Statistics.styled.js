import { styled, theme } from 'common';

export const StatisticsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(12px, 2.1vw, 28px);

  padding: ${({ theme }) => theme.spacing(4, 0)};
`;

export const StatListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 2.1vw, 32px);
`;

export const StatItemStyled = styled.li`
  padding: clamp(4px, 2.1vw, 8px) clamp(16px, 2.1vw, 24px);

  box-shadow: 1px 1px 3px 1px ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.lighterGrey};
  ${({ theme }) => theme.transition('transform')}

  border-radius: ${({ theme }) => theme.spacing(1)};

  :hover,
  :focus-within {
    transform: scale(1.02);
  }
`;
