import {StyleSheet} from 'react-native';
import {DEFAULT_BORDER_END_RADIUS} from '../../../styles/constants';

export const guestStyle = StyleSheet.create({
  heroImageContainer: {
    alignItems: 'center',
    borderRadius: DEFAULT_BORDER_END_RADIUS,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor:
      'linear-gradient(79deg, rgba(59,89,152,1) 0%, rgba(59,89,152,1) 25%, rgba(25,47,106,1) 100%) ',
  },
  signFormContainer: {
    padding: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 8,
  },
  signFormInput: {
    marginVertical: 5,
  },
});
