import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SignInScreen from '../../../routes/guest/signin';
import SignUpScreen from '../../../routes/guest/signup';
import {RootGuestStackParamsList, GuestRouteName} from '../../../routes/types';

const Stack = createStackNavigator<RootGuestStackParamsList>();

const GuestStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={GuestRouteName.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={GuestRouteName.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default GuestStackNavigator;
