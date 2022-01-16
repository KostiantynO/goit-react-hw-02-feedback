import { styled } from 'common';

export const ButtonStyled = styled.button.attrs(({ type }) => ({
  type: type === 'submit' ? 'submit' : 'button',
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(12px, 2.1vw, 16px) clamp(12px, 2.1vw, 20px);

  font-family: inherit;
  font-size: clamp(1.1rem, 2.1vw, 1.5rem);
  color: ${({ theme }) => theme.colors.white};

  background: none;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border: none;
  border-radius: ${({ theme, round }) => (round ? '50%' : theme.spacing(1))};
  appearance: none;

  ${({ theme }) => theme.transition('color', 'background-color')};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
