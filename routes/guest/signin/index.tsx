import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Card, TextInput} from 'react-native-paper';
import HeroCard from '../../../components/cards/HeroCard';
import {signInAnonymously, signInEmail} from '../../../infrastructure/auth';
import SignInSvg from '../../../styles/undraw/sign_in.svg';
import {GuestRouteName} from '../../types';
import {guestStyle} from '../styles/style';
const SignInScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPressSignInAnonymously = useCallback(async () => {
    try {
      await signInAnonymously();
      console.log('User signed in anonymously');
    } catch (error) {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }
      console.error(error);
    }
  }, []);
  const onPressSignInEmail = useCallback(async () => {
    try {
      await signInEmail(email, password);
      console.log('User account created & signed in!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    }
  }, [email, password]);
  return (
    <>
      <HeroCard svgImage={SignInSvg} />
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
            onPress={onPressSignInEmail}
            mode="contained">
            {t('signin')}
          </Button>
        </Card.Content>
      </Card>
      <Card style={guestStyle.signInFormContainer}>
        <Button onPress={onPressSignInAnonymously}>Anonymous log in</Button>
        <Button onPress={() => navigation.navigate(GuestRouteName.SIGN_UP)}>
          {t('signup')}
        </Button>
      </Card>
    </>
  );
};

export default SignInScreen;
