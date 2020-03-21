import React from 'react';
import styled from '@emotion/styled';
import { SignupForm } from '../components';

const StyledContainer = styled.div`
  width: 30rem;
  height: 100vh;
  margin: auto;
  padding-top: 10rem;
`;

const SignupPage = () => (
  <StyledContainer>
    <SignupForm />
  </StyledContainer>
);

export default SignupPage;
