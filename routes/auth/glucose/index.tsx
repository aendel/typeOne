import {useRoute} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import ViewPage from '../../../components/page/ViewPage';
import {authCurrentUser} from '../../../infrastructure/auth';
import {
  addGlucoseMeasure,
  getAllGlucoseMeasures,
  IGlucoseItem,
} from '../../../infrastructure/firestore';
import {AuthRouteName} from '../../types';

const glucoseItemExample: IGlucoseItem = {
  concentration: 100,
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString(),
  measured: 'afterBreakfast',
};

const GlucoseFormPage = () => {
  const route = useRoute();
  const {t} = useTranslation();
  const user = useMemo(() => authCurrentUser(), []);
  const glucoseList = useMemo(async () => {
    if (user) {
      try {
        const _glucoseList = await getAllGlucoseMeasures(user);
        console.log({_glucoseList});
        _glucoseList.forEach((gluc) =>
          console.log({gluc}, 'gluc:data', gluc.data()),
        );
        console.log('----------- docs -----------');
        _glucoseList.docs.forEach((gluc) => console.log({gluc}));

        return _glucoseList;
      } catch (error) {
        return null;
      }
    }
    return null;
  }, [user]);
  return (
    <ViewPage title={t(AuthRouteName.GLUCOSE_FORM)}>
      <Text>{route.key}</Text>
      <Button
        onPress={() => {
          user && addGlucoseMeasure(user, glucoseItemExample);
        }}>
        Add glucose item example
      </Button>
    </ViewPage>
  );
};

export default GlucoseFormPage;
