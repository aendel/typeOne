import {StyleSheet} from 'react-native';
import {DEFAULT_BORDER_END_RADIUS} from '../../../styles/constants';

export const guestStyle = StyleSheet.create({
  heroImageContainer: {
    alignItems: 'center',
    borderBottomEndRadius: DEFAULT_BORDER_END_RADIUS,
    borderBottomStartRadius: DEFAULT_BORDER_END_RADIUS,
    marginBottom: 10,
    elevation: 12,
  },
  signInFormContainer: {
    padding: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 8,
  },
  signInFormInput: {
    marginVertical: 5,
  },
});
