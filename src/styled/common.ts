import { DefaultTheme } from "styled-components/native";

export const common: DefaultTheme = {
  // Colors
  colors: {
    black: "#000000",
    white: "#ffffff",
    backgroundColor: "rgb(249, 250, 251)",
    textColor: "rgb(31, 41, 55)",
    gray: {
      small: "rgb(249, 250, 251)",
      medium: "rgb(75, 85, 99)",
      large: "rgb(31, 41, 55)",
    },
    red: {
      small: "rgb(254, 242, 242)",
      medium: "rgb(220, 38, 38)",
      large: "rgb(153, 27, 27)",
    },
    yellow: {
      small: "rgb(254, 243, 199)",
      medium: "rgb(245, 158, 11)",
      large: "rgb(146, 64, 14)",
    },
    green: {
      small: "rgb(209, 250, 229)",
      medium: "rgb(16, 185, 129)",
      large: "rgb(6, 95, 70)",
    },
    blue: {
      small: "rgb(219, 234, 254)",
      medium: "rgb(59, 130, 246)",
      large: "rgb(30, 64, 175)",
    },
    purple: {
      small: "rgb(237, 233, 254)",
      medium: "rgb(139, 92, 246)",
      large: "rgb(91, 33, 182)",
    },
    pink: {
      small: "rgb(252, 231, 243)",
      medium: "rgb(236, 72, 153)",
      large: "rgb(157, 23, 77)",
    },
  },
  // Space
  space: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
  // Radii
  radii: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  // Borders
  borders: {
    small: "1px",
    medium: "2px",
    large: "4px",
  },
  // Shadows
  shadows: {
    small: "",
    medium: "8",
    large: "16",
  },
  // Fonts
  fontWeights: {
    small: "300",
    medium: "400",
    large: "600",
  },
  fontSizes: {
    small: "16px",
    medium: "24px",
    large: "32px",
  },
  fonts: {
    default: "Rubik",
    alternative: "Arial",
  },
  // Sizes
  sizes: {
    auto: "auto",
    quarter: "25%",
    half: "50%",
    full: "100%",
  },
  // Z Indices
  zIndices: {
    0: "0",
    full: "999",
  },
};
