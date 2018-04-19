import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import App from '../client/src/App.jsx';
import { shallow, mount, render } from 'enzyme';

describe('App component renders correctly', () => {
  it('renders correctly', () => {
    setTimeout(() => {
      const rendered = renderer.create(
        <App />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  }, 1000);
});