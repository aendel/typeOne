import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Card, TextInput} from 'react-native-paper';
import HeroCard from '../../../components/cards/HeroCard';
import SafeScrollWithInputPage from '../../../components/page/SafeScrollWithInput';
import {signInAnonymously, signInEmail} from '../../../infrastructure/auth';
import SignInSvg from '../../../styles/undraw/sign_in.svg';
import {GuestRouteName} from '../../types';
import {guestStyle} from '../style';
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
    <SafeScrollWithInputPage>
      <HeroCard svgImage={SignInSvg} />
      <Card style={guestStyle.signFormContainer}>
        <Card.Content>
          <TextInput
            style={guestStyle.signFormInput}
            label="Email"
            placeholder="email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={guestStyle.signFormInput}
            label="Password"
            placeholder="password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <Button
            style={guestStyle.signFormInput}
            onPress={onPressSignInEmail}
            mode="contained">
            {t('signin')}
          </Button>
        </Card.Content>
      </Card>
      <Card style={guestStyle.signFormContainer}>
        <Button onPress={onPressSignInAnonymously}>Anonymous log in</Button>
        <Button onPress={() => navigation.navigate(GuestRouteName.SIGN_UP)}>
          {t('signup')}
        </Button>
      </Card>
    </SafeScrollWithInputPage>
  );
};

export default SignInScreen;
