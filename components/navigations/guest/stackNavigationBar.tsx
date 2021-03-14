import {StackHeaderProps} from '@react-navigation/stack';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {APP_NAME} from '../../../styles/constants';
import {PreferencesContext} from '../../contexts/preferencesContext';

const StackNavigationBar = (props: StackHeaderProps) => {
  const {navigation, previous} = props;
  const {toggleTheme} = React.useContext(PreferencesContext);

  return (
    <Appbar.Header>
      {!!previous && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={APP_NAME} />
      <Appbar.Action icon="brightness-6" onPress={toggleTheme} />
    </Appbar.Header>
  );
};

export default StackNavigationBar;
