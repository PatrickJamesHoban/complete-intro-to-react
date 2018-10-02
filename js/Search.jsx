import React from 'react';
// below is a reference to the data.json file
import preload from '../data.json';

const Search = () => (
  <div className="search">
    {preload.shows.map(show => (

    ))}
  </div>
);

export default Search;
