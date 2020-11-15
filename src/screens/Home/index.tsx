import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';

import { Box, Text, Image } from '@primitive';
import { useTheme } from '@definitions/styled';
import { Heart } from '@icons';

import catWithFlowers from '@assets/images/cat-with-flower.jpg';

export const Home = () => {
  const theme = useTheme();
  return (
    <SafeAreaView>
      <Box>
        <Text textAlign="center" pt="20px" fontSize={18} color={theme.colors.secondary}>
          react-native-plain-boilerplate
        </Text>
      </Box>
      <Box px="20px">
        <Box py="20px" alignItems="center">
          <Heart color="red" width={45} height={45} fill="pink" />
        </Box>
        <Box borderRadius={20} overflow="hidden">
          <Image width="100%" height={200} resizeMode="cover" source={catWithFlowers} />
        </Box>
      </Box>
    </SafeAreaView>
  );
};
