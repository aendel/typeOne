export enum AuthRouteName {
  HOME = 'Home',
  PROFILE = 'Profile',
  SETTINGS = 'Settings',
}
export enum GuestRouteName {
  SIGN_IN = 'SignIn',
  SIGN_UP = 'SignUp',
}
export type RootAuthTabParamsList = {
  [AuthRouteName.HOME]: undefined;
  [AuthRouteName.PROFILE]: {name: string};
  [AuthRouteName.SETTINGS]: undefined;
};
export type RootGuestStackParamsList = {
  [GuestRouteName.SIGN_IN]: undefined;
  [GuestRouteName.SIGN_UP]: undefined;
};
