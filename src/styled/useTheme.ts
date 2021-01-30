import { useColorScheme } from "react-native";

import { dark } from "./dark";
import { light } from "./light";

export const useTheme = () => {
  const colorScheme = useColorScheme();

  if (colorScheme === "dark") {
    return dark;
  }

  return light;
};
