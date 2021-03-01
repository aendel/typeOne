export enum RouteName {
  HOME = 'Home',
  PROFILE = 'Profile',
  SIGN_IN = 'Sign in',
  SIGN_UP = 'Sign up',
  SETTINGS = 'Settings',
}
export type RootStackParamList = {
  [RouteName.HOME]: undefined;
  [RouteName.PROFILE]: {name: string};
  [RouteName.SIGN_IN]: undefined;
  [RouteName.SIGN_UP]: undefined;
  [RouteName.SETTINGS]: undefined;
};
