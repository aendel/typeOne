import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {AuthRouteName} from '../../types';
import ViewPage from '../../../components/page/ViewPage';
import {authCurrentUser, signOut} from '../../../infrastructure/auth';

const HomeScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const onPressProfile = () =>
    navigation.navigate(AuthRouteName.PROFILE, {name: 'Jane'});
  const onPressGlucose = () => navigation.navigate(AuthRouteName.GLUCOSE_FORM);
  return (
    <ViewPage title={t(AuthRouteName.HOME)}>
      <Button onPress={onPressProfile}>{authCurrentUser()?.uid}</Button>
      <Button onPress={onPressGlucose}>Glucose {authCurrentUser()?.uid}</Button>
      <Button onPress={signOut}>{t('signout')}</Button>
    </ViewPage>
  );
};

export default HomeScreen;
