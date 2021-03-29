import {useRoute} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Paragraph} from 'react-native-paper';
import ViewPage from '../../../components/page/ViewPage';
import {AuthRouteName} from '../../types';

const ProfileScreen = () => {
  const route = useRoute();
  const name = route.params?.toString() ?? 'JON';
  const {t} = useTranslation();

  return (
    <ViewPage title={t(AuthRouteName.PROFILE)}>
      <Paragraph>{t('title')}</Paragraph>
    </ViewPage>
  );
};

export default ProfileScreen;
