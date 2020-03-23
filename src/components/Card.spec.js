import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';
import useThemeProvider from '../utilities/useThemeProvider';

const ThemedCard = useThemeProvider(Card);

describe('Card', () => {
  it('should render', () => {
    const CardComponent = renderer
      .create(<ThemedCard title="Test">Test</ThemedCard>)
      .toJSON();
    expect(CardComponent).toMatchSnapshot();
  });
});
