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
  auth,
} from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log('Ooop! Something went wrong ==> ', error.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src={HotShopping}
            alt='HotShopping'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold font-hind text-blue-gray-700'>
            I already have an account ✌🏽
          </h2>
          <p className='mt-2 text-center text-sm text-blue-gray-600 max-w'>
            Or don't have and account yet?
            <Link
              to='/signup'
              className='font-medium text-red-500 hover:text-red-500'
            >
              {' '}
              Sign up
            </Link>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10'>
            <form className='space-y-6' onSubmit={this.handleSubmit}>
              <div>
                <FormInput
                  id='email'
                  name='email'
                  type='email'
                  label='Email address'
                  autoComplete='email'
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
                  autoComplete='current-password'
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

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300'></div>
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>
                    Or continue with
                  </span>
                </div>
              </div>

              <div className='mt-6 grid grid-cols-3 gap-3'>
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
