/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import React, {Suspense, useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {ActivityIndicator, Provider as PaperProvider} from 'react-native-paper';
import {PreferencesContext} from './components/contexts/preferencesContext';
import AuthBottomTabNavigator from './components/navigations/auth/bottomTabNavigator';
import GuestStackNavigator from './components/navigations/guest/stackNavigator';
import './i18n/config';
import {CombinedDarkTheme, CombinedDefaultTheme} from './styles/theme';

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
      <Suspense fallback={<ActivityIndicator animating={true} />}>
        <PreferencesContext.Provider value={preferences}>
          <PaperProvider theme={myTheme}>
            <NavigationContainer theme={myTheme}>
              {!user ? <GuestStackNavigator /> : <AuthBottomTabNavigator />}
            </NavigationContainer>
          </PaperProvider>
        </PreferencesContext.Provider>
      </Suspense>
    </>
  );
};

export default App;
