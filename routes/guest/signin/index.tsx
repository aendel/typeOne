import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

const SignInScreen = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('hello')}</Text>
    </View>
  );
};

export default SignInScreen;
