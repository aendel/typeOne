import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {PreferencesContext} from '../../../components/contexts/preferencesContext';

const SettingScreen = () => {
  const {t} = useTranslation();
  const {toggleTheme} = React.useContext(PreferencesContext);
  return (
    <View>
      <Text>{t('settings')}!</Text>
      <Button onPress={toggleTheme}>Dark theme</Button>
    </View>
  );
};

export default SettingScreen;
