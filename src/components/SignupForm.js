import React from 'react';
import Form from './Form';
import Button from './Button';
import TextField from './TextField';

const SignupForm = () => {
  const handleSubmit = () => {
    // TODO
  };

  return (
    <Form title="Sign Up" onSubmit={handleSubmit}>
      <TextField
        id="username"
        type="text"
        label="Username"
        placeholder="Choose a username"
        autoFocus={true}
      />
      <TextField
        id="password"
        type="password"
        label="Password"
        placeholder="Enter a strong password"
      />
      <TextField
        id="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Confirm your password"
      />
      <Button type="submit" primary fullWidth>
        Sign Up
      </Button>
    </Form>
  );
};

export default SignupForm;
