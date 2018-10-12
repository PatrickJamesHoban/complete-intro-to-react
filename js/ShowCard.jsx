import React from 'react';

// Note, prop-types no longer exists in react library
import { string } from 'prop-types';

// props becomes whatever the parent passes down into show card.
const ShowCard = props => (
  <div className="show-card">
    <img alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
    {/* alt with backticks is another way to show string concatenation */}
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      {/* parentheses are literally part of the string output to the dom in this instance */}
      <p>{props.description}</p>
    </div>
  </div>
);

// => shape is the object, poster, title, etc. are the properties of that object
// => isRequired means NOT optional, will throw an error if a required prop is not there.

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
};

export default ShowCard;
