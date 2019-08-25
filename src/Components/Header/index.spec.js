import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './index';

describe('Header component', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
  it('contains the title', () => {
    wrapper = shallow(<Header />);
    expect(wrapper.find('.header-text').html()).toEqual(
      '<div class="header-text">FISH AUCTION</div>',
    );
  });
});
