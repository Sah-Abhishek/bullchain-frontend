import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase.js"
import { sendPasswordResetEmail } from "firebase/auth/web-extension";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}



export const doSigninWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  // store the details of the users
  // result.user
  return result;
}

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
}

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
}


export const doSendVerificationEmail = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,

  });
}
