import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Button, List, Text, Title} from 'react-native-paper';
import {PreferencesContext} from '../../../components/contexts/preferencesContext';
import {ViewPageStyle} from '../../../styles/theme';
import {AuthRouteName} from '../../types';

const SettingScreen = () => {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const {toggleTheme} = React.useContext(PreferencesContext);
  return (
    <View style={ViewPageStyle.body}>
      <Title>{t(AuthRouteName.SETTINGS)}</Title>
      <List.Section>
        <List.Subheader>Theme</List.Subheader>
        <List.Item onPress={toggleTheme} title="Dark theme" />
        <List.Subheader>Language</List.Subheader>
        <List.Item onPress={() => changeLanguage('en')} title="EN" />
        <List.Item onPress={() => changeLanguage('it')} title="IT" />
      </List.Section>
    </View>
  );
};

export default SettingScreen;
