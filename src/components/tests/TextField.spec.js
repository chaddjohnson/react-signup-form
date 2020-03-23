import React from 'react';
import renderer from 'react-test-renderer';
import TextField from '../TextField';
import withThemeProvider from '../../utilities/withThemeProvider';

const ThemedTextField = withThemeProvider(TextField);

describe('TextField', () => {
  it('should render', () => {
    const TextFieldComponent = renderer
      .create(
        <ThemedTextField
          id="test"
          type="text"
          label="Ttest"
          placeholder="This is a test"
          autoFocus={false}
          minLength={6}
          maxLength={32}
        />
      )
      .toJSON();
    expect(TextFieldComponent).toMatchSnapshot();
  });
});
