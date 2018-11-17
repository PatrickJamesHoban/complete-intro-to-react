import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
}
renderApp()

// TODO May cause errors later, revisit video at 11 min remaining to get link.
if (module.hot) {
  module.hot.accept('./App', () => {
    render.App();
  });
}

// arrow functions have an implicit return.
// const Add = (a, b) => {
//   return a + b;
// };
// const Add2 = (a, b) => a + b;



