import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {GuestRouteName} from '../../types';
import {TextInput, Button, Card, ActivityIndicator} from 'react-native-paper';
import SignInSvg from '../../../styles/undraw/sign_in.svg';
import {
  DEFAULT_UNDRAW_WIDTH,
  DEFAULT_UNDRAW_HEIGHT,
  DEFAULT_BORDER_END_RADIUS,
} from '../../../styles/constants';
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
      <Card style={style.heroImageContainer}>
        <Card.Content>
          <SignInSvg
            width={DEFAULT_UNDRAW_WIDTH}
            height={DEFAULT_UNDRAW_HEIGHT}
          />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
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
        </Card.Content>
        <Card.Actions>
          <Button onPress={signInEmail} mode="contained">
            {t('signin')}
          </Button>
        </Card.Actions>
        <Button onPress={onAnonymousButtonPress}>Anonymous</Button>
        <Button onPress={() => navigation.navigate(GuestRouteName.SIGN_UP)}>
          {t('signup')}
        </Button>
      </Card>
    </>
  );
};

const style = StyleSheet.create({
  heroImageContainer: {
    alignItems: 'center',
    borderBottomEndRadius: DEFAULT_BORDER_END_RADIUS,
    borderBottomStartRadius: DEFAULT_BORDER_END_RADIUS,
    marginBottom: '2%',
  },
});

export default SignInScreen;
