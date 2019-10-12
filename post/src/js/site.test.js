import React from 'react';
import { shallow } from 'enzyme';
import Site from './site';

describe('testing', () => {
  it('check for hello world', () => {
    const wrapper = shallow(<Site name='world' />);
    expect(wrapper.find('p').text()).toEqual('Hello, world!');
  })
});
