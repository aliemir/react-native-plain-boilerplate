import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { NavigationContainer } from "@react-navigation/native";

import { useTheme, ThemeProvider } from "@/styled";
import { RootNavigation } from "@/navigation";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const global: { HermesInternal: null | {} };

const App = () => {
  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <SafeAreaProvider>
            <RootNavigation />
          </SafeAreaProvider>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
