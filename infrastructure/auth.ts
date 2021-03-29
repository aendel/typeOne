import auth from '@react-native-firebase/auth';

export const signOut = () => auth().signOut();

export const createUser = (email: string, password: string) =>
  auth().createUserWithEmailAndPassword(email, password);

export const signInEmail = (email: string, password: string) =>
  auth().signInWithEmailAndPassword(email, password);

export const signInAnonymously = () => auth().signInAnonymously();

export const authCurrentUser = () => auth().currentUser;
