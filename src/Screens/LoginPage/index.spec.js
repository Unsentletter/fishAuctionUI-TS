import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './index';

describe('Login page', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });
  it('email input check', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[name="email"]').simulate('change', {
      target: { name: 'email', value: 'test@email.com' },
    });
    expect(wrapper.state('email')).toEqual('test@email.com');
  });
  it('password input check', () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[name="password"]').simulate('change', {
      target: { name: 'password', value: 'password' },
    });
    expect(wrapper.state('password')).toEqual('password');
  });
  it('submit button exists', () => {
    wrapper = shallow(<Login />);
    const button = wrapper.find('Button');
    expect(button.exists()).toBe(true);
  });
  // TODO - Learn how to test props
  // it('test test', () => {
  //   const preventDefault = {
  //     preventDefault: () => {},
  //   };
  //   wrapper = shallow(<Login />);
  //   wrapper.find('input[name="email"]').simulate('change', {
  //     target: { name: 'email', value: 'test@email.com' },
  //   });
  //   wrapper.find('input[name="password"]').simulate('change', {
  //     target: { name: 'password', value: 'password' },
  //   });
  //   const loginButton = wrapper.find('button[name="loginButton"]');
  //   console.log(loginButton);
  //   loginButton.simulate('click', preventDefault);
  // });
});
