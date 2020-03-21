import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  margin: ${props => props.theme.spacing * 1.5}rem;
  margin-bottom: ${props => props.theme.spacing * 2.5}rem;
`;

const Card = styled(({ className, title, children }) => (
  <div className={className}>
    {title && (
      <StyledHeader>
        <h2>{title}</h2>
      </StyledHeader>
    )}
    {children}
  </div>
))`
  background-color: ${props => props.theme.colors.background.paper};
  padding: ${props => props.theme.spacing * 2}rem;
  border-radius: 4px;
  box-shadow: 0 20px 50px ${props => props.theme.colors.background.paper};
`;

Card.propTypes = {
  title: PropTypes.node
};

export default Card;
