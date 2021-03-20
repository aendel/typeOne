import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Button, Text, Title} from 'react-native-paper';
import {PreferencesContext} from '../../../components/contexts/preferencesContext';
import {ViewPageStyle} from '../../../styles/theme';
import {AuthRouteName} from '../../types';

const SettingScreen = () => {
  const {t} = useTranslation();
  const {toggleTheme} = React.useContext(PreferencesContext);
  return (
    <View style={ViewPageStyle.body}>
      <Title>{t(AuthRouteName.SETTINGS)}</Title>
      <Text>{t('settings')}!</Text>
      <Button onPress={toggleTheme}>Dark theme</Button>
    </View>
  );
};

export default SettingScreen;
