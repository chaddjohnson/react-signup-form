import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const FormLayoutItem = styled.div`
  margin: ${props => props.theme.spacing * 2}rem;
`;

const FormLayout = ({ children }) => {
  return (
    <>
      {children.map((child, index) => (
        <FormLayoutItem key={index}>{child}</FormLayoutItem>
      ))}
    </>
  );
};

const StyledFormLayout = styled(FormLayout)`
  margin: ${props => props.theme.spacing}rem;
`;

StyledFormLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node
  ]).isRequired
};

export default StyledFormLayout;
