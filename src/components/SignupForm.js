import React from 'react';
import Form from './Form';
import FormLayout from './FormLayout';
import FormActions from './FormActions';
import Button from './Button';
import TextField from './TextField';
import {
  useField,
  useForm,
  notEmpty,
  lengthMoreThan,
  lengthLessThan
} from '../hooks/form';

const SignupForm = () => {
  const username = useField({
    value: '',
    validates: [
      notEmpty("Username can't be blank"),
      lengthLessThan(6, 'Username must be at least 6 characters'),
      lengthMoreThan(32, 'Username must 32 characters or less')
    ]
  });
  const password = useField({
    value: '',
    validates: [
      notEmpty("Password can't be blank"),
      lengthLessThan(6, 'Password must be at least 6 characters')
    ]
  });
  const passwordConfirmation = useField(
    {
      value: '',
      validates: [
        notEmpty("Password confirmation can't be blank"),
        value => {
          if (value !== password.value) {
            return 'Password confirmation must match password';
          }
        }
      ]
    },
    [password.value]
  );

  const { fields, dirty, valid } = useForm({
    username,
    password,
    passwordConfirmation
  });

  const handleSubmit = event => {
    event.preventDefault();

    // Perform HTTP request to create account here.
    // ...
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
          minLength={6}
          maxLength={32}
          {...fields.username}
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          minLength={6}
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
