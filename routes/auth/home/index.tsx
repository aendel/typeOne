import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Title} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';
import {View} from 'react-native';
import {AuthRouteName} from '../../types';
import {ViewPageStyle} from '../../../styles/theme';

const HomeScreen = () => {
  const {t} = useTranslation();

  const navigation = useNavigation();

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View style={ViewPageStyle.body}>
      <Title>{t(AuthRouteName.HOME)}</Title>
      <Button
        onPress={() =>
          navigation.navigate(AuthRouteName.PROFILE, {name: 'Jane'})
        }>
        {auth().currentUser?.uid}
      </Button>
      <Button onPress={() => navigation.navigate(AuthRouteName.GLUCOSE_FORM)}>
        Glucose {auth().currentUser?.uid}
      </Button>
      <Button onPress={signOut}>{t('signout')}</Button>
    </View>
  );
};

export default HomeScreen;
