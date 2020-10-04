import { useColorScheme } from 'react-native';

import { dark, light } from './';

export const useTheme = () => {
  const colorScheme = useColorScheme();

  if (colorScheme === 'dark') {
    return dark;
  }

  return light;
};
