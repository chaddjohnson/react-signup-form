import React from 'react';
import renderer from 'react-test-renderer';
import SignupForm from '../SignupForm';
import withThemeProvider from '../../utilities/withThemeProvider';

const ThemedSignupForm = withThemeProvider(SignupForm);

describe('SignupForm', () => {
  it('should render', () => {
    const SignupFormComponent = renderer.create(<ThemedSignupForm />).toJSON();
    expect(SignupFormComponent).toMatchSnapshot();
  });
});
