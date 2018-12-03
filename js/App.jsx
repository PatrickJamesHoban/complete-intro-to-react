import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  // HashRouter is a higher order component. Introduces behavior, routing, but doesn't actually render markup itself.
  // one route of our application. // exact = means that path must match exactly. // component = what to render if path matches.
  // cant use class in JSX as that is a reserved word for JavaScript.
  // component FourOhFour => If nothing else matches, render this...
  <BrowserRouter>
    <div className="app">
      {/* Switch will go in priority order, dishes out the first one matched. */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

