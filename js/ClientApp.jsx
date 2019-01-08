// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
}
renderApp()

// TODO May cause errors later, revisit video at 11 min remaining to get link.
// https://github.com/webpack/webpack-dev-server/issues/100#issuecomment-295246370
// if module hot exists, you can be sure you're in dev.
// if in dev, anytime app changes, rerender the whole app.
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}

// arrow functions have an implicit return.
// const Add = (a, b) => {
//   return a + b;
// };
// const Add2 = (a, b) => a + b;



