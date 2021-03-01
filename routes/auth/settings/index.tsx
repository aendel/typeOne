import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

const SettingScreen = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('settings')}!</Text>
    </View>
  );
};

export default SettingScreen;
