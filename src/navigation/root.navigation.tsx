import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { HomeScreen } from "@/screens";
import { useTheme } from "@/styled";

const RootStack = createStackNavigator();

const { Navigator, Screen } = RootStack;

export const RootNavigation = () => {
  const theme = useTheme();

  const screenOptions: StackNavigationOptions = {
    headerTintColor: theme.colors.textColor,
    headerStyle: {
      backgroundColor: theme.colors.backgroundColor,
    },
  };

  return (
    <Navigator screenOptions={{ ...screenOptions }}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};
