import { Container, PropTypes } from 'common';
import { SectionStyled } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <Container>
        <h2>{title}</h2>
      </Container>

      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
