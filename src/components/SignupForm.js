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
      notEmpty("Username can't be blank."),
      lengthLessThan(6, 'Username must be at least 6 characters.'),
      lengthMoreThan(32, 'Username must 32 characters or less.'),
      value => {
        const formatRegex = /^[a-zA-Z0-9_]+$/;
        const matchesFormat = value.match(formatRegex);

        if (!matchesFormat) {
          return 'Username may only contain alphanumeric characters and underscores.';
        }
      }
    ]
  });
  const password = useField({
    value: '',
    validates: [
      notEmpty("Password can't be blank."),
      lengthLessThan(8, 'Password must be at least 8 characters.'),
      value => {
        // Reference: https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
        const strengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
        const isStrong = value.match(strengthRegex);

        if (!isStrong) {
          return 'Password must contain at least one of each character: lowercase, uppercase, number, special.';
        }
      }
    ]
  });
  const passwordConfirmation = useField(
    {
      value: '',
      validates: [
        notEmpty("Password confirmation can't be blank."),
        value => {
          if (value !== password.value) {
            return 'Password confirmation must match password.';
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
    // Also perform validation in the API.
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
          minLength={8}
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
