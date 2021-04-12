import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import GlucoseFormPage from '../../../../routes/auth/glucose';
import {AuthRouteName} from '../../../../routes/types';
import StackNavigationBar from '../../guest/StackNavigationBar';
import AuthBottomTabNavigator from '../AuthBottomTabNavigator';

const Stack = createStackNavigator<any>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthRouteName.HOME}
      screenOptions={{
        header: (props) => <StackNavigationBar {...props} />,
      }}>
      <Stack.Screen
        name={AuthRouteName.HOME}
        component={AuthBottomTabNavigator}
      />
      <Stack.Screen
        name={AuthRouteName.GLUCOSE_FORM}
        component={GlucoseFormPage}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
