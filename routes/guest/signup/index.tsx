import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const SignUpScreen = () => {
  const {t} = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View>
      <TextInput
        label="Email"
        placeholder="email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        label="Password"
        placeholder="password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button onPress={createUser}>{t('signup')}</Button>
    </View>
  );
};

export default SignUpScreen;
