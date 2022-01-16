import { styled, theme } from 'common';

export const SectionStyled = styled.section`
  padding: ${({ theme }) => theme.spacing(8, 0)};
`;

export const SectionTitleStyled = styled.h2`
  margin-bottom: clamp(28px, 2.1vw, 36px);
  font-size: clamp(2rem, 4vw, 3.5rem);
  transform: translateX(50%);
  color: ${({ theme }) => theme.colors.lightTeal};

  ${({ theme }) => theme.transition('transform')}

  > span {
    display: inline-block;
    transform: translateX(-50%);
    ${({ theme }) => theme.transition('transform')}
  }
`;