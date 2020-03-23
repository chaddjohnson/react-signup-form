import React from 'react';
import renderer from 'react-test-renderer';
import SignupForm from './SignupForm';
import useThemeProvider from '../utilities/useThemeProvider';

const ThemedSignupForm = useThemeProvider(SignupForm);

describe('SignupForm', () => {
  it('should render', () => {
    const SignupFormComponent = renderer.create(<ThemedSignupForm />).toJSON();
    expect(SignupFormComponent).toMatchSnapshot();
  });
});
