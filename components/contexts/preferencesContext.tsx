import React from 'react';
import {CombinedDefaultTheme} from '../../styles/theme';

export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
  theme: CombinedDefaultTheme,
});
