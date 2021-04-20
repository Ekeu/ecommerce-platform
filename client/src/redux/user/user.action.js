import UserActionTypes from './user.types';

// Remember all actions return action creator === JS Objects

//====> User Actions <====//
export const setCurentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

//====> Google Signin Actions <====//
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

//====> Github Signin Actions <====//
export const gitHubSignInStart = () => ({
  type: UserActionTypes.GITHUB_SIGN_IN_START,
});

//====> Twitter Signin Actions <====//
export const twitterSignInStart = () => ({
  type: UserActionTypes.TWITTER_SIGN_IN_START,
});

//====> Email Signin Actions <====//
export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

//====> Generic Signin Actions <====//
export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

//====> Generic Signin Actions <====//
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

//====> Generic Signout Actions <====//
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

//====> Generic Signup Actions <====//
export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({user, additionalData}) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: {user, additionalData}
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
