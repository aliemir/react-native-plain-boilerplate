import { DefaultTheme } from "styled-components/native";
import { common } from "./common";

export const dark: DefaultTheme = {
  ...common,
  colors: {
    ...common.colors,
    textColor: "rgb(249, 250, 251)",
    backgroundColor: "rgb(31, 41, 55)",
  },
};
