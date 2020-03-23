import React from 'react';
import renderer from 'react-test-renderer';
import Form from './Form';
import withThemeProvider from '../utilities/withThemeProvider';

const ThemedForm = withThemeProvider(Form);

describe('Form', () => {
  it('should render', () => {
    const FormComponent = renderer
      .create(<ThemedForm title="Test">Test</ThemedForm>)
      .toJSON();
    expect(FormComponent).toMatchSnapshot();
  });
});
