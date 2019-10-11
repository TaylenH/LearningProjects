import { shallow } from 'enzyme';
import React from 'react';
import Foo from './foo';

describe('<foo>', () => {
  it('renders three <li> tags', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.find('li').length).toBe(3);
  });

  it('has props as state', () => {
    const tt="hi";
    const wrapper = shallow(<Foo tt={tt}/>);
    expect(wrapper.find('ul').children().first().text()).toEqual(tt);
  });
});
