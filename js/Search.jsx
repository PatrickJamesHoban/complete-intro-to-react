import React from 'react';
import ShowCard from './ShowCard';
// below is a reference to the data.json file
import preload from '../data.json';

// key= is used to keep react from blowing away everything every time something changes, example a sort function for shows on a page.  Provide a unique identifier that Search can then keep track of.
const Search = () => (
  <div className="search">
    <div>
      {preload.shows.map(show => (
        <ShowCard key={show.imdbID} {...show} />
      ))}
    </div>
  </div>
);

export default Search;
