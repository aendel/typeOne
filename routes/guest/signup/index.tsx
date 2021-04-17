import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TextInput, Button, Card, HelperText} from 'react-native-paper';
import {guestStyle} from '../style';
import SubscriberSvg from '../../../styles/undraw/subscriber.svg';
import {createUser} from '../../../infrastructure/auth';
import HeroCard from '../../../components/cards/HeroCard';
import SafeScrollWithInputPage from '../../../components/page/SafeScrollWithInput';
import {addNewUserToUsers} from '../../../infrastructure/firestore';

enum errorTypeMap {
  'auth/email-already-in-use' = 'That email address is already in use!',
  'auth/invalid-email' = 'That email address is invalid!',
  'auth/weak-password' = 'That password is week',
}

type errorType = keyof typeof errorTypeMap;

interface ISignUpError {
  hasError: boolean;
  errorText: errorTypeMap;
}

const SignUpScreen = () => {
  const {t} = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<ISignUpError>({} as ISignUpError);
  const onPressCreateUser = useCallback(async () => {
    try {
      const newUser = await createUser(email, password);
      console.log('created user');
      await addNewUserToUsers(newUser);
    } catch (error) {
      const errorCode = error.code as errorType;
      setError({
        hasError: true,
        errorText: errorTypeMap[errorCode] ?? 'Generic error',
      });
      console.error(error);
    }
  }, [email, password]);
  return (
    <SafeScrollWithInputPage>
      <HeroCard svgImage={SubscriberSvg} />
      <Card style={guestStyle.signFormContainer}>
        <Card.Content>
          <HelperText type="error" visible={error.hasError}>
            {error.errorText}
          </HelperText>
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
