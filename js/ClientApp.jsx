import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';

// arrow functions have an implicit return.
// const Add = (a, b) => {
//   return a + b;
// };
// const Add2 = (a, b) => a + b;

const App = () => (
  // HashRouter is a higher order component. Introduces behavior, routing, but doesn't actually render markup itself.
  <HashRouter>
    // can't use class in JSX as that is a reserved word for JavaScript.
    <div className="app">
      // one route of our application. // exact => means that path must match exactly. // component => what to render if
      path matches.
      <Route exact path="/" component={Landing} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById('app'));
