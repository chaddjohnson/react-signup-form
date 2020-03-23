import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('should render', () => {
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });
});
