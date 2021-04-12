import {StyleSheet} from 'react-native';
import {DEFAULT_BORDER_END_RADIUS} from '../../styles/constants';

const linearGradientBg =
  'linear-gradient(79deg, rgba(59,89,152,1) 0%, rgba(59,89,152,1) 25%, rgba(25,47,106,1) 100%) ';

export const guestStyle = StyleSheet.create({
  heroImageContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: DEFAULT_BORDER_END_RADIUS,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: linearGradientBg,
  },
  heroImage: {
    flex: 1,
    backgroundColor: linearGradientBg,
  },
  signFormContainer: {
    flex: 1,
    padding: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 5,
  },
  signFormInput: {
    marginVertical: 2.5,
  },
});
