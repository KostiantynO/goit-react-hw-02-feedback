import { styled } from 'common';

export const ButtonStyled = styled.button.attrs(({ type }) => ({
  type: type === 'submit' ? 'submit' : 'button',
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(2px, 2.1vw, 4px) clamp(4px, 2.1vw, 8px);

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
