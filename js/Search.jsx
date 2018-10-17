import React, { Component } from 'react';
import ShowCard from './ShowCard';
// below is a reference to the data.json file
import preload from '../data.json';

// key= is used to keep react from blowing away everything every time something changes, example a sort function for shows on a page.  Provide a unique identifier that Search can then keep track of.
class Search extends Component {
  // Constructor takes in props and passes props up. Simple boilerplate.
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'some sort of debug statement'
    };
    // put bind function inside constructor function so that it is only called once.
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  // .setState lets react know that it has something that it needs to re-render.  Don't modify state directly.
  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="search"
          />
        </header>
        <div>
          {preload.shows.map(show => (
            <ShowCard key={show.imdbID} {...show} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
