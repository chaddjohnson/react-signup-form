import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('should render', () => {
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });
});
