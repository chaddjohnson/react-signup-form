import React from 'react';
import renderer from 'react-test-renderer';
import SignupPage from './signup';
import useThemeProvider from '../utilities/useThemeProvider';

const ThemedSignupPage = useThemeProvider(SignupPage);

describe('SignupPage', () => {
  it('should render', () => {
    const SignupPageComponent = renderer.create(<ThemedSignupPage />).toJSON();
    expect(SignupPageComponent).toMatchSnapshot();
  });
});
