import React from 'react';
import renderer from 'react-test-renderer';
import FormActions from './FormActions';
import useThemeProvider from '../utilities/useThemeProvider';

const ThemedFormActions = useThemeProvider(FormActions);

describe('FormActions', () => {
  it('should render', () => {
    const FormActionsComponent = renderer
      .create(<ThemedFormActions>Test</ThemedFormActions>)
      .toJSON();
    expect(FormActionsComponent).toMatchSnapshot();
  });
});
