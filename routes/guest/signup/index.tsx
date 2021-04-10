import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TextInput, Button, Card} from 'react-native-paper';
import {guestStyle} from '../styles/style';
import SubscriberSvg from '../../../styles/undraw/subscriber.svg';
import {createUser} from '../../../infrastructure/auth';
import HeroCard from '../../../components/cards/HeroCard';
import SafeScrollWithInputPage from '../../../components/page/SafeScrollWithInput';

const SignUpScreen = () => {
  const {t} = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressCreateUser = useCallback(async () => {
    try {
      await createUser(email, password);
      console.log('created user');
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
      <HeroCard svgImage={SubscriberSvg} />
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
            onPress={onPressCreateUser}
            mode="contained">
            {t('signup')}
          </Button>
        </Card.Content>
      </Card>
    </SafeScrollWithInputPage>
  );
};

export default SignUpScreen;
