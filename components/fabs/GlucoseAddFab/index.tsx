import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FAB, Portal} from 'react-native-paper';
import {AuthRouteName} from '../../../routes/types';
import {PreferencesContext} from '../../contexts/PreferencesContext';
import {fabsStyles} from './styles';

const GlucoseAddFab = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [state, setState] = useState({open: false});
  const onStateChange = ({open}: {open: boolean}) => setState({open});
  const {open} = state;
  const {theme} = React.useContext(PreferencesContext);
  return (
    <Portal>
      <FAB.Group
        visible
        style={fabsStyles.fab}
        open={open}
        icon={open ? 'close-thick' : 'plus-thick'}
        theme={theme}
        actions={[
          {
            icon: 'star',
            label: 'star',
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: 'water',
            label: 'Email',
            onPress: () => console.log('Pressed email'),
          },
          {
            icon: 'diabetes',
            label: t('glucose'),
            onPress: () => navigation.navigate(AuthRouteName.GLUCOSE_FORM),
            small: false,
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  );
};

export default GlucoseAddFab;
