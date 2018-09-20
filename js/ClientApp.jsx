import React from 'react';
import { render } from 'react-dom';

// arrow functions have an implicit return.
// const Add = (a, b) => {
//   return a + b;
// };
// const Add2 = (a, b) => a + b;

const App = () => (
  // can't use class in JSX as that is a reserved word for JavaScript.
  <div className="app">
    <div className="landing">
      <h1>SVideo</h1>
      <input type="text" placeholder="Search" />
      <a>or Browse All</a>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));
