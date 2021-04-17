import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const USER_COLLECTION = 'Users';
const USER_GLUCOSE_COLLECTION = 'GlucoseMeasure';
const measuredOptions = {
  beforeBreakfast: 'Before Breakfast',
  afterBreakfast: 'After Breakfast',
};

type MeasuredOptionsType = keyof typeof measuredOptions;

export interface IGlucoseItem {
  concentration: number;
  date: string;
  time: string;
  measured: MeasuredOptionsType;
}

export async function getUsersCollections() {
  return firestore().collection(USER_COLLECTION);
}

export async function getUserFromUsers(user: FirebaseAuthTypes.User) {
  return firestore().collection(USER_COLLECTION).doc(user.uid);
}

export async function addNewUserToUsers(
  newUser: FirebaseAuthTypes.UserCredential,
) {
  return firestore().collection(USER_COLLECTION).doc(newUser.user.uid).set({
    email: newUser.user.email,
  });
}

export async function addGlucoseMeasure(
  user: FirebaseAuthTypes.User,
  glucoseItem: IGlucoseItem,
) {
  return firestore()
    .collection(USER_COLLECTION)
    .doc(user.uid)
    .collection(USER_GLUCOSE_COLLECTION)
    .add(glucoseItem);
}

export async function editGlucoseMeasure(
  user: FirebaseAuthTypes.User,
  glucoseId: string,
  editGlucoseItem: IGlucoseItem,
) {
  return firestore()
    .collection(USER_COLLECTION)
    .doc(user.uid)
    .collection(USER_GLUCOSE_COLLECTION)
    .doc(glucoseId)
    .update(editGlucoseItem);
}

export async function getAllGlucoseMeasures(user: FirebaseAuthTypes.User) {
  return firestore()
    .collection(USER_COLLECTION)
    .doc(user.uid)
    .collection(USER_GLUCOSE_COLLECTION)
    .get();
}
