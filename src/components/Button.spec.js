import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';
import withThemeProvider from '../utilities/withThemeProvider';

const ThemedButton = withThemeProvider(Button);

describe('Button', () => {
  it('should render', () => {
    const ButtonComponent = renderer
      .create(
        <ThemedButton type="submit" primary fullWidth disabled={true}>
          Test
        </ThemedButton>
      )
      .toJSON();
    expect(ButtonComponent).toMatchSnapshot();
  });
});
