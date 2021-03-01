import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
import {useTranslation} from 'react-i18next';

const HomeScreen = () => {
  const {t, i18n} = useTranslation();

  const navigation = useNavigation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
      <Button title="en" onPress={() => changeLanguage('en')} />
      <Button title="it" onPress={() => changeLanguage('it')} />
    </>
  );
};

export default HomeScreen;
