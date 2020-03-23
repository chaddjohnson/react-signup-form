import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card';
import withThemeProvider from '../../utilities/withThemeProvider';

const ThemedCard = withThemeProvider(Card);

describe('Card', () => {
  it('should render', () => {
    const CardComponent = renderer
      .create(<ThemedCard title="Test">Test</ThemedCard>)
      .toJSON();
    expect(CardComponent).toMatchSnapshot();
  });
});
