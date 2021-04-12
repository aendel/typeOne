import React from 'react';
import {useTranslation} from 'react-i18next';
import {List} from 'react-native-paper';
import {PreferencesContext} from '../../../components/contexts/PreferencesContext';
import ViewPage from '../../../components/page/ViewPage';
import {AvailableResources} from '../../../i18n/types';
import {AuthRouteName} from '../../types';

const SettingScreen = () => {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lng: AvailableResources) => {
    i18n.changeLanguage(lng);
  };
  const {toggleTheme} = React.useContext(PreferencesContext);
  return (
    <ViewPage title={t(AuthRouteName.SETTINGS)}>
      <List.Section>
        <List.Subheader>{t('theme')}</List.Subheader>
        <List.Item onPress={toggleTheme} title={t('darkTheme')} />
        <List.Subheader>{t('languages')}</List.Subheader>
        <List.Item onPress={() => changeLanguage('en')} title="EN" />
        <List.Item onPress={() => changeLanguage('it')} title="IT" />
      </List.Section>
    </ViewPage>
  );
};

export default SettingScreen;
