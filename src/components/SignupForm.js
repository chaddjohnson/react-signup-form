import React from 'react';
import Form from './Form';
import FormLayout from './FormLayout';
import FormActions from './FormActions';
import Button from './Button';
import TextField from './TextField';

const SignupForm = () => {
  const handleSubmit = () => {
    // TODO
  };

  return (
    <Form title="Sign Up" onSubmit={handleSubmit}>
      <FormLayout>
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
        <FormActions>
          <Button type="submit" primary fullWidth>
            Sign Up
          </Button>
        </FormActions>
      </FormLayout>
    </Form>
  );
};

export default SignupForm;
