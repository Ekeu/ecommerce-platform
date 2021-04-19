import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HotShopping from '../../assets/hotShopping.svg';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.action';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      photoURL: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    const photoURL = `https://robohash.org/${email}.png?set=set3&size=150x150`;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    /* try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, {
        displayName,
        photoURL: `https://robohash.org/${email}.png?set=set3&size=150x150`,
      });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        photoURL: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log('Ooops! Something went wrong ==> ', error.message);
    } */
    signUpStart({ displayName, email, password, photoURL });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src={HotShopping}
            alt='HotShopping'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold font-hind text-blue-gray-700'>
            I do not have an account 🎉
          </h2>
          <p className='mt-2 text-center text-sm text-blue-gray-600 max-w'>
            Already a member?
            <Link
              to='/signin'
              className='font-medium text-red-500 hover:text-red-500'
            >
              {' '}
              Sign in
            </Link>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10'>
            <form className='space-y-6' onSubmit={this.handleSubmit}>
              <div>
                <FormInput
                  id='displayName'
                  name='displayName'
                  type='text'
                  label='Display Name'
                  autoComplete='username'
                  required
                  value={displayName}
                  handleChange={this.handleChange}
                />
              </div>
              <div>
                <FormInput
                  id='email'
                  name='email'
                  type='email'
                  label='Email address'
                  autoComplete='email'
                  required
                  value={email}
                  handleChange={this.handleChange}
                />
              </div>
              <div>
                <FormInput
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='new-password'
                  required
                  label='Password'
                  value={password}
                  handleChange={this.handleChange}
                />
              </div>
              <div>
                <FormInput
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  required
                  label='Confirm password'
                  value={confirmPassword}
                  handleChange={this.handleChange}
                />
              </div>

              <div>
                <CustomButton type='submit'>SIGN UP</CustomButton>
              </div>
            </form>

            <div className='mt-6'></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
