export enum AuthRouteName {
  HOME = 'home',
  PROFILE = 'profile',
  SETTINGS = 'settings',
}
export enum GuestRouteName {
  SIGN_IN = 'signin',
  SIGN_UP = 'signup',
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
