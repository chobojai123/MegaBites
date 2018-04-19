import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import App from '../client/src/App.jsx';
import { shallow, mount, render } from 'enzyme';

describe('app rendered', () => {

  it('App component should render the app div', () => {
    expect(shallow(<App />).is('.app')).toBe(true);
  });

  it('should mount only 1', function () {
    expect(mount(<App />).find('.app').length).toBe(1);
  });
})
