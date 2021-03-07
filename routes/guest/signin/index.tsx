import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignInScreen = () => {
  const {t} = useTranslation();

  const onAnonymousButtonPress = async () => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch((error) => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };

  return (
    <View>
      <Button title="Anonymous" onPress={onAnonymousButtonPress} />
    </View>
  );
};

export default SignInScreen;
