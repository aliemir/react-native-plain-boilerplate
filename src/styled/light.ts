import { DefaultTheme } from "styled-components/native";
import { common } from "./common";

export const light: DefaultTheme = {
  ...common,
  colors: {
    ...common.colors,
    backgroundColor: "rgb(249, 250, 251)",
    textColor: "rgb(31, 41, 55)",
  },
};
