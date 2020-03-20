import React from 'react';
import Button from './Button';
import FormLayout from './FormLayout';
import TextField from './TextField';

const LoginForm = () => {
  const handleSubmit = () => {
    // TODO
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          id="username"
          label="Username"
          type="text"
          autoComplete={false}
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
    </form>
  );
};

export default LoginForm;
