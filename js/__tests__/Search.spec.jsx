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

xtest('Search renders correct number of shows based on search', () => {}); // adding x to front of test will make it so test does NOT run.  xit and xdescribe will work as well.

// Note: Could also wrap all tests in a describe function of the same style, then change each 'test' to 'it'.  Same as style taught at DBC.
