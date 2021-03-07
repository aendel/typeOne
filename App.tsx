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
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './routes/auth/home';
import ProfileScreen from './routes/auth/profile';
import SettingsScreen from './routes/auth/settings';
import SignInScreen from './routes/guest/signin';
import SignUpScreen from './routes/guest/signup';
import {RootStackParamList, RouteName} from './routes/types';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

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
        <NavigationContainer>
          <Stack.Navigator>
            {!user ? (
              <>
                <Stack.Screen
                  name={RouteName.SIGN_IN}
                  component={SignInScreen}
                />
                <Stack.Screen
                  name={RouteName.SIGN_UP}
                  component={SignUpScreen}
                />
              </>
            ) : (
              <>
                <Stack.Screen name={RouteName.HOME} component={HomeScreen} />
                <Stack.Screen
                  name={RouteName.PROFILE}
                  component={ProfileScreen}
                />
                <Stack.Screen
                  name={RouteName.SETTINGS}
                  component={SettingsScreen}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Suspense>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
