import React from 'react';

// props becomes whatever the parent passes down into show card.
const ShowCard = props => (
  <div className="show-card">
    <img alt={`${props.show.title} Show Poster`} src={`/public/img/posters/${props.show.poster}`} />
    {/* alt with backticks is another way to show string concatenation */}
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      {/* parentheses are literally part of the string output to the dom in this instance */}
      <p>{props.show.description}</p>
    </div>
  </div>
);

export default ShowCard;
