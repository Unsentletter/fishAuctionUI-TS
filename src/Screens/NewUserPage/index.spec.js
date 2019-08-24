import React from 'react';
import { shallow } from 'enzyme';
import { NewUser } from './index';

describe('NewUser page', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<NewUser />);
    expect(wrapper.exists()).toBe(true);
  });
  it('email input check', () => {
    wrapper = shallow(<NewUser />);
    wrapper.find('input[name="email"]').simulate('change', {
      target: { name: 'email', value: 'test@email.com' },
    });
    expect(wrapper.state('email')).toEqual('test@email.com');
  });
  it('password input check', () => {
    wrapper = shallow(<NewUser />);
    wrapper.find('input[name="password"]').simulate('change', {
      target: { name: 'password', value: 'password' },
    });
    expect(wrapper.state('password')).toEqual('password');
  });
  it('username input check', () => {
    wrapper = shallow(<NewUser />);
    wrapper.find('input[name="username"]').simulate('change', {
      target: { name: 'username', value: 'davemadman' },
    });
    expect(wrapper.state('username')).toEqual('davemadman');
  });
  it('submit button exists', () => {
    wrapper = shallow(<NewUser />);
    const button = wrapper.find('Button');
    expect(button.exists()).toBe(true);
  });
});
