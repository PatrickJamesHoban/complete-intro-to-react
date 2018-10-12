import React from 'react';
import ShowCard from './ShowCard';
// below is a reference to the data.json file
import preload from '../data.json';

const Search = () => (
  <div className="search">
    {preload.shows.map(show => (
      <ShowCard {...show} show={show} />
    ))}
  </div>
);

export default Search;
