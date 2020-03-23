import React from 'react';
import renderer from 'react-test-renderer';
import FormLayout from './FormLayout';
import withThemeProvider from '../utilities/withThemeProvider';

const ThemedFormLayout = withThemeProvider(FormLayout);

describe('FormLayout', () => {
  it('should render', () => {
    const FormLayoutComponent = renderer
      .create(
        <ThemedFormLayout>
          <div>one</div>
          <div>two</div>
          <div>three</div>
        </ThemedFormLayout>
      )
      .toJSON();
    expect(FormLayoutComponent).toMatchSnapshot();
  });
});
