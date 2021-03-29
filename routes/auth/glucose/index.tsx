import {useRoute} from '@react-navigation/core';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native-paper';
import ViewPage from '../../../components/page/ViewPage';
import {AuthRouteName} from '../../types';

const GlucoseFormPage = () => {
  const route = useRoute();
  const {t} = useTranslation();
  return (
    <ViewPage title={t(AuthRouteName.GLUCOSE_FORM)}>
      <Text>{route.key}</Text>
    </ViewPage>
  );
};

export default GlucoseFormPage;
