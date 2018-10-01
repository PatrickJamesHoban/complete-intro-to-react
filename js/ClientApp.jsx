import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

// arrow functions have an implicit return.
// const Add = (a, b) => {
//   return a + b;
// };
// const Add2 = (a, b) => a + b;

const App = () => (
  // HashRouter is a higher order component. Introduces behavior, routing, but doesn't actually render markup itself.
  // one route of our application. // exact = means that path must match exactly. // component = what to render if path matches.
  // cant use class in JSX as that is a reserved word for JavaScript.
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById('app'));
