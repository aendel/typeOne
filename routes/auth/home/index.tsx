import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const {t, i18n} = useTranslation();

  const navigation = useNavigation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
      <Button title="en" onPress={() => changeLanguage('en')} />
      <Button title="it" onPress={() => changeLanguage('it')} />
      <Button title="signout" onPress={signOut} />
    </>
  );
};

export default HomeScreen;
