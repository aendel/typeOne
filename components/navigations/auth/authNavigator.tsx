import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import GlucoseFormPage from '../../../routes/auth/glucose';
import {AuthRouteName} from '../../../routes/types';
import GlucoseAddFab from '../../fabs/glucoseFab';
import StackNavigationBar from '../guest/stackNavigationBar';
import AuthBottomTabNavigator from './bottomTabNavigator';

const Stack = createStackNavigator<any>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthRouteName.HOME}
      screenOptions={{
        header: (props) => (
          <>
            <GlucoseAddFab />
            <StackNavigationBar {...props} />
          </>
        ),
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

export default AuthNavigator;
