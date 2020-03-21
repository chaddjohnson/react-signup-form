import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledItem = styled.div`
  margin: ${props => props.theme.spacing * 2}rem
    ${props => props.theme.spacing * 1.5}rem;
`;

const FormLayout = ({ children }) => {
  return (
    <>
      {children.map((child, index) => (
        <StyledItem key={index}>{child}</StyledItem>
      ))}
    </>
  );
};

FormLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node
  ]).isRequired
};

export default FormLayout;
