// node does not understand import syntax, also doesn't understand jsx
import React from 'react';
// import renderer from 'react-test-renderer'; // have to drop renderer in order to use enzyme
import { shallow } from 'enzyme'; // enzyme is wrapper on top of react renderer. will stub out children elements, will only fail search if something is wrong with search, won't dive down into showcard to what is actually rendered from showcard.
import Search from '../Search';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
