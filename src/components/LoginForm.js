import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import FormLayout from './FormLayout';
import TextField from './TextField';

const Form = styled.form`
  background-color: ${props => props.theme.colors.background.paper};
  width: 30rem;
  margin: 0 auto;
  padding: ${props => props.theme.spacing * 2}rem;
`;

const Header = styled.header`
  padding: ${props => props.theme.spacing}rem
    ${props => props.theme.spacing * 2}rem;
  margin: 0;
`;

const LoginForm = () => {
  const handleSubmit = () => {
    // TODO
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Header>
        <h2>Log In</h2>
      </Header>
      <FormLayout>
        <TextField
          id="username"
          label="Username"
          type="text"
          autoFocus={true}
        />
        <TextField id="password" label="Password" type="password" />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
        />
        <Button type="submit" fullWidth>
          Log In
        </Button>
      </FormLayout>
    </Form>
  );
};

export default LoginForm;
