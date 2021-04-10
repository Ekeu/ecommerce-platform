import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HotShopping from '../../assets/hotShopping.svg';
import CustomButton from '../custom-button/custom-button.component';
import SocialButton from '../custom-button/social-button.component';
import FormInput from '../form-input/form-input.component';

import { ReactComponent as Google } from '../../assets/sign-in-google.svg';
import { ReactComponent as Twitter } from '../../assets/sign-in-twitter.svg';
import { ReactComponent as Github } from '../../assets/sign-in-github.svg';

import {
  signInWithGoogle,
  signInWithTwitter,
  signInWithGithub,
} from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div class='min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div class='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            class='mx-auto h-12 w-auto'
            src={HotShopping}
            alt='HotShopping'
          />
          <h2 class='mt-6 text-center text-3xl font-extrabold font-hind text-blue-gray-700'>
            I already have an account ✌🏽
          </h2>
          <p class='mt-2 text-center text-sm text-blue-gray-600 max-w'>
            Or don't have and account yet?
            <Link
              to='/signup'
              class='font-medium text-red-500 hover:text-red-500'
            >
              {' '}
              Sign up
            </Link>
          </p>
        </div>

        <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div class='bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10'>
            <form class='space-y-6' onSubmit={this.handleSubmit}>
              <div>
                <FormInput
                  id='email'
                  name='email'
                  type='email'
                  label='Email address'
                  autocomplete='email'
                  required
                  value={this.state.email}
                  handleChange={this.handleChange}
                />
              </div>
              <div>
                <FormInput
                  id='password'
                  name='password'
                  type='password'
                  autocomplete='current-password'
                  required
                  label='Password'
                  value={this.state.password}
                  handleChange={this.handleChange}
                />
              </div>

              <div>
                <CustomButton type='submit'>SIGN IN</CustomButton>
              </div>
            </form>

            <div class='mt-6'>
              <div class='relative'>
                <div class='absolute inset-0 flex items-center'>
                  <div class='w-full border-t border-gray-300'></div>
                </div>
                <div class='relative flex justify-center text-sm'>
                  <span class='px-2 bg-white text-gray-500'>
                    Or continue with
                  </span>
                </div>
              </div>

              <div class='mt-6 grid grid-cols-3 gap-3'>
                <div>
                  <SocialButton social='Google' onClick={signInWithGoogle}>
                    <Google />
                  </SocialButton>
                </div>

                <div>
                  <SocialButton social='Twitter' onClick={signInWithTwitter}>
                    <Twitter />
                  </SocialButton>
                </div>

                <div>
                  <SocialButton social='Github' onClick={signInWithGithub}>
                    <Github />
                  </SocialButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
