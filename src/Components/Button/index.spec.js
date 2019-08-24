import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './index';

describe('Button component', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
});
