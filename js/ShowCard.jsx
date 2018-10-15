import React from 'react';
// Note, prop-types no longer exists in react library
import { string } from 'prop-types';
// styled is another react library
import styled from 'styled-components';

// tagged template literal double back-ticks `` pure javascript
// write as you would normal CSS within
const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 15px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

// props becomes whatever the parent passes down into show card.
const ShowCard = props => (
  <Wrapper>
    <Image alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
    {/* alt with backticks is another way to show string concatenation */}
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      {/* parentheses are literally part of the string output to the dom in this instance */}
      <p>{props.description}</p>
    </div>
  </Wrapper>
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
