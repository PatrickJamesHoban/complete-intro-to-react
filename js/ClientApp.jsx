import React from 'react';
import { render } from 'react-dom';

// const ce = React.createElement;

const MyTitle = function(props) {
  // return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));

  // above now rewritten in jsx as below return.
  // use parenthesis after return to let JS know it needs to go to the next line.
  return (
    <div>
      <h1 style={{ color: props.color }}> {props.title} </h1>
    </div>
  );
};

const MyFirstComponent = function() {
  // return ce(
  //   'div',
  //   { id: 'my-first-component' },
  // ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
  // ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
  // ce(MyTitle, { title: 'Rick & Morty', color: 'LimeGreen' }),
  // ce(MyTitle, { title: 'Silicon Valley', color: 'Lime' })

  // without parenthesis after return, div needs to be on the same line.
  return (
    <div id="my-first-component">
      // trailing slash must be present in JSX
      <MyTitle title="Game of Thrones" color="YellowGreen" />
      <MyTitle title="Stranger Things" color="GreenYellow" />
      <MyTitle title="Rick & Morty" color="LimeGreen" />
      <MyTitle title="Silicon Valley" color="Lime" />
    </div>
  );
};

// render(ce(MyFirstComponent), document.getElementById('app'));
render(<MyFirstComponent/> document.getElementById('app'));
