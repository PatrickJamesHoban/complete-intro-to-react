import React from 'react';
// below is a reference to the data.json file
import preload from '../data.json';

const Search = () => (
  <div className="search">
    {/* Debugging trick to see JSON output. */}
    <pre>
      <code>{JSON.stringify(preload, null, 4)}</code>
    </pre>
  </div>
);

export default Search;
