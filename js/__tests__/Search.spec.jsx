// node does not understand import syntax, also doesn't understand jsx
import React from 'react';
// import renderer from 'react-test-renderer'; // have to drop renderer in order to use enzyme
import { shallow } from 'enzyme'; // enzyme is wrapper on top of react renderer. will stub out children elements, will only fail search if something is wrong with search, won't dive down into showcard to what is actually rendered from showcard.
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct number of shows', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search renders correct number of shows based on search', () => {
  const searchWord = 'black';
  const component = shallow(<Search />);
  component.find('input').simulate('change', { target: { value: searchWord } }); // triggering the event handler in the search box as though we typed in 'black'.  // enzyme can use .find() for CSS selector or react component.
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length; // typically you would create a separate module to test rather than copy in logic from jsx file.
  expect(component.find(ShowCard).length).toEqual(showCount);
});

// adding x to front of test will make it so test does NOT run.  xit and xdescribe will work as well.

// Note: Could also wrap all tests in a describe function of the same style, then change each 'test' to 'it'.  Same as style taught at DBC.
