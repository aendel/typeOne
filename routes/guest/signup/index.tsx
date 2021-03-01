import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';

const SignUpScreen = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('hello')}</Text>
    </View>
  );
};

export default SignUpScreen;
