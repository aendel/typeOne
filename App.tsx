import 'react-native-gesture-handler';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import React, {Suspense, useEffect, useState} from 'react';
import {ActivityIndicator, Provider as PaperProvider} from 'react-native-paper';
import {PreferencesContext} from './components/contexts/PreferencesContext';
import AuthStackNavigator from './components/navigations/auth/AuthStackNavigator';
import GuestStackNavigator from './components/navigations/guest/GuestStackNavigator';
import './i18n/config';
import {CombinedDarkTheme, CombinedDefaultTheme} from './styles/theme';
import {useColorScheme} from 'react-native';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const colorScheme = useColorScheme();
  const [isThemeDark, setIsThemeDark] = useState(colorScheme === 'dark');

  const myTheme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
      theme: myTheme,
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
    <Suspense fallback={<ActivityIndicator animating={true} />}>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={myTheme}>
          <NavigationContainer theme={myTheme}>
            {user ? <AuthStackNavigator /> : <GuestStackNavigator />}
          </NavigationContainer>
        </PaperProvider>
      </PreferencesContext.Provider>
    </Suspense>
  );
};

export default App;
