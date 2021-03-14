import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

const ProfileScreen = () => {
  const route = useRoute();
  const name = route.params?.toString() ?? 'JON';
  const {t, i18n} = useTranslation();

  return <Text>{t('title')}</Text>;
};

export default ProfileScreen;
