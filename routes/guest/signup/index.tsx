import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TextInput, Button, Card} from 'react-native-paper';
import {
  DEFAULT_UNDRAW_HEIGHT,
  DEFAULT_UNDRAW_WIDTH,
} from '../../../styles/constants';
import {guestStyle} from '../styles/style';
import SubscriberSvg from '../../../styles/undraw/subscriber.svg';

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
    <>
      <Card style={guestStyle.heroImageContainer}>
        <SubscriberSvg
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
            onPress={createUser}
            mode="contained">
            {t('signup')}
          </Button>
        </Card.Content>
      </Card>
    </>
  );
};

export default SignUpScreen;
