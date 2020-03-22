import React from 'react';
import styled from '@emotion/styled';
import { SignupForm } from '../components';

const StyledContainer = styled.div`
  max-width: 30rem;
  height: 100vh;
  margin: auto;
  padding-left: ${props => props.theme.spacing * 1.5}rem;
  padding-right: ${props => props.theme.spacing * 1.5}rem;
  padding-top: ${props => props.theme.spacing * 5}rem;

  ${props => props.theme.breakpoint.sm`
    padding-left: 0;
    padding-right: 0;
    padding-top: ${props.theme.spacing * 20}rem;
  `};

  /* Account for special case of landscape on phones. */
  @media screen and (min-device-width: 576px) and (max-device-width: 768px) and (orientation: landscape) {
    padding-top: ${props => props.theme.spacing * 2}rem;
  }
`;

const SignupPage = () => (
  <StyledContainer>
    <SignupForm />
  </StyledContainer>
);

export default SignupPage;
