import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {useTranslation} from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../../routes/auth/home';
import ProfileScreen from '../../../routes/auth/profile';
import SettingsScreen from '../../../routes/auth/settings';
import {AuthRouteName, RootAuthTabParamsList} from '../../../routes/types';
import {DEFAULT_BOTTOM_TAB_ICON_SIZE} from '../../../styles/constants';

const Tab = createMaterialBottomTabNavigator<RootAuthTabParamsList>();

export const AuthBottomTabNavigator = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t(AuthRouteName.HOME)}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={DEFAULT_BOTTOM_TAB_ICON_SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t(AuthRouteName.PROFILE)}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="shield-account"
              color={color}
              size={DEFAULT_BOTTOM_TAB_ICON_SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t(AuthRouteName.SETTINGS)}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cogs"
              color={color}
              size={DEFAULT_BOTTOM_TAB_ICON_SIZE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthBottomTabNavigator;
