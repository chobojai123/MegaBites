import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/App.jsx';

describe('App component renders correctly', () => {
  it('should render correctly', () => {
    setTimeout(() => {
      const rendered = renderer.create(
        <App />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  }, 1000);
});