import React from 'react';
import renderer from 'react-test-renderer';
import FormActions from '../FormActions';
import withThemeProvider from '../../utilities/withThemeProvider';

const ThemedFormActions = withThemeProvider(FormActions);

describe('FormActions', () => {
  it('should render', () => {
    const FormActionsComponent = renderer
      .create(<ThemedFormActions>Test</ThemedFormActions>)
      .toJSON();
    expect(FormActionsComponent).toMatchSnapshot();
  });
});
