import React from 'react';
import renderer from 'react-test-renderer';
import FormLayout from './FormLayout';
import useThemeProvider from '../utilities/useThemeProvider';

const ThemedFormLayout = useThemeProvider(FormLayout);

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
