import React from 'react';
import renderer from 'react-test-renderer';
import Form from './Form';
import useThemeProvider from '../utilities/useThemeProvider';

const ThemedForm = useThemeProvider(Form);

describe('Form', () => {
  it('should render', () => {
    const FormComponent = renderer
      .create(<ThemedForm title="Test">Test</ThemedForm>)
      .toJSON();
    expect(FormComponent).toMatchSnapshot();
  });
});
