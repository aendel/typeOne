import {useRoute} from '@react-navigation/core';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {ViewPageStyle} from '../../../styles/theme';
import {AuthRouteName} from '../../types';

const GlucoseFormPage = () => {
  const route = useRoute();
  const {t} = useTranslation();
  return (
    <View style={ViewPageStyle.body}>
      <Title>{t(AuthRouteName.GLUCOSE_FORM)}</Title>
      <Text>{route.key}</Text>
    </View>
  );
};

export default GlucoseFormPage;
