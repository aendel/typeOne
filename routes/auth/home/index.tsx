import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
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
      <Button onPress={() => navigation.navigate('Profile', {name: 'Jane'})}>
        Go to Jane's profile
      </Button>
      <Button onPress={() => changeLanguage('en')}>en</Button>
      <Button onPress={() => changeLanguage('it')}>it</Button>
      <Button onPress={signOut}>signout</Button>
    </>
  );
};

export default HomeScreen;
