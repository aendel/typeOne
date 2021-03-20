import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Paragraph, Title} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {ViewPageStyle} from '../../../styles/theme';
import {AuthRouteName} from '../../types';

const ProfileScreen = () => {
  const route = useRoute();
  const name = route.params?.toString() ?? 'JON';
  const {t} = useTranslation();

  return (
    <View style={ViewPageStyle.body}>
      <Title>{t(AuthRouteName.PROFILE)}</Title>
      <Paragraph>{t('title')}</Paragraph>
    </View>
  );
};

export default ProfileScreen;
