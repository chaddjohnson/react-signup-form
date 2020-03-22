import React from 'react';
import Form from './Form';
import FormLayout from './FormLayout';
import FormActions from './FormActions';
import Button from './Button';
import TextField from './TextField';
import { useField, useForm, notEmpty, matches } from '../hooks/form';

const SignupForm = () => {
  const { fields, dirty, valid } = useForm({
    username: useField({
      value: '',
      validates: [notEmpty("Username can't be blank")]
    }),
    password: useField({
      value: '',
      validates: [notEmpty("Password can't be blank")]
    }),
    passwordConfirmation: useField({
      value: '',
      validates: [
        notEmpty("Password confirmation can't be blank"),
        matches('Password and confirmation must match')
      ]
    })
  });

  const handleSubmit = event => {
    event.preventDefault();

    // Simulate an HTTP request.
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
          {...fields.username}
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          placeholder="Enter a strong password"
          {...fields.password}
        />
        <TextField
          id="passwordConfirmation"
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          {...fields.passwordConfirmation}
        />
        <FormActions>
          <Button type="submit" primary fullWidth disabled={!dirty || !valid}>
            Sign Up
          </Button>
        </FormActions>
      </FormLayout>
    </Form>
  );
};

export default SignupForm;
