import React from 'react';
import renderer from 'react-test-renderer';
import SignupPage from './signup';
import withThemeProvider from '../utilities/withThemeProvider';

const ThemedSignupPage = withThemeProvider(SignupPage);

describe('SignupPage', () => {
  it('should render', () => {
    const SignupPageComponent = renderer.create(<ThemedSignupPage />).toJSON();
    expect(SignupPageComponent).toMatchSnapshot();
  });
});
