import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Card, TextInput} from 'react-native-paper';
import {
  DEFAULT_UNDRAW_HEIGHT,
  DEFAULT_UNDRAW_WIDTH,
} from '../../../styles/constants';
import SignInSvg from '../../../styles/undraw/sign_in.svg';
import {GuestRouteName} from '../../types';
import {guestStyle} from '../styles/style';
const SignInScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onAnonymousButtonPress = useCallback(async () => {
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
  }, []);
  const signInEmail = useCallback(() => {
    auth()
      .signInWithEmailAndPassword(email, password)
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
  }, [email, password]);
  return (
    <>
      <Card style={guestStyle.heroImageContainer}>
        <SignInSvg
          width={DEFAULT_UNDRAW_WIDTH}
          height={DEFAULT_UNDRAW_HEIGHT}
        />
      </Card>
      <Card style={guestStyle.signInFormContainer}>
        <Card.Content>
          <TextInput
            style={guestStyle.signInFormInput}
            label="Email"
            placeholder="email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={guestStyle.signInFormInput}
            label="Password"
            placeholder="password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <Button
            style={guestStyle.signInFormInput}
            onPress={signInEmail}
            mode="contained">
            {t('signin')}
          </Button>
        </Card.Content>
      </Card>
      <Card style={guestStyle.signInFormContainer}>
        <Button onPress={onAnonymousButtonPress}>Anonymous log in</Button>
        <Button onPress={() => navigation.navigate(GuestRouteName.SIGN_UP)}>
          {t('signup')}
        </Button>
      </Card>
    </>
  );
};

export default SignInScreen;
