import React from 'react';
import ReactDOM from 'react-dom';
import ScreenBayon from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScreenBayon />, div);
  expect(ReactDOM.unmountComponentAtNode(div)).toBeTruthy();
});
