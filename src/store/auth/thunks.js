import { chechingCredentials } from './';

export const checkingAuthentication = ( email, password ) => {
  return async ( dispatch ) => {
    dispatch( chechingCredentials() );
  }
}

export const startGoogleSignIn = () => {
  return async ( dispatch ) => {
    dispatch( chechingCredentials() );
  }
}
