/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import './i18n/config';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Suspense, useEffect, useState} from 'react';
import HomeScreen from './routes/auth/home';
import ProfileScreen from './routes/auth/profile';
import SettingsScreen from './routes/auth/settings';
import SignInScreen from './routes/guest/signin';
import SignUpScreen from './routes/guest/signup';
import {
  RootAuthTabParamsList,
  AuthRouteName,
  GuestRouteName,
  RootGuestStackParamsList,
} from './routes/types';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {CombinedDarkTheme, CombinedDefaultTheme} from './styles/theme';
import {Provider as PaperProvider} from 'react-native-paper';
import {PreferencesContext} from './components/contexts/preferencesContext';

const Stack = createStackNavigator<RootGuestStackParamsList>();
const Tab = createMaterialBottomTabNavigator<RootAuthTabParamsList>();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const [isThemeDark, setIsThemeDark] = React.useState(false);

  const myTheme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  // Handle user state changes
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <>
      <Suspense fallback="loading">
        <PreferencesContext.Provider value={preferences}>
          <PaperProvider theme={myTheme}>
            <NavigationContainer theme={myTheme}>
              {!user ? (
                <Stack.Navigator>
                  <Stack.Screen
                    name={GuestRouteName.SIGN_IN}
                    component={SignInScreen}
                  />
                  <Stack.Screen
                    name={GuestRouteName.SIGN_UP}
                    component={SignUpScreen}
                  />
                </Stack.Navigator>
              ) : (
                <Tab.Navigator>
                  <Tab.Screen
                    name={AuthRouteName.HOME}
                    component={HomeScreen}
                  />
                  <Tab.Screen
                    name={AuthRouteName.PROFILE}
                    component={ProfileScreen}
                  />
                  <Tab.Screen
                    name={AuthRouteName.SETTINGS}
                    component={SettingsScreen}
                  />
                </Tab.Navigator>
              )}
            </NavigationContainer>
          </PaperProvider>
        </PreferencesContext.Provider>
      </Suspense>
    </>
  );
};

export default App;
