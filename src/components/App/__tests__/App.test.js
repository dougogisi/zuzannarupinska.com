import React from 'react';
import { mount } from 'enzyme';
import { App } from '../App';

describe('<App />', () => {

  test('Should render correctly', () => {
    const wrapper = mount(<App yo="Test :-)" />);

    expect(wrapper).toMatchSnapshot();
  });

});
