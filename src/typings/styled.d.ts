import "styled-components/native";

interface ISizes {
  small: string;
  medium: string;
  large: string;
}

declare module "styled-components/native" {
  export interface DefaultTheme {
    // Space
    space: ISizes;
    // Colors
    colors: {
      backgroundColor: string;
      textColor: string;
      black: string;
      white: string;
      gray: ISizes;
      red: ISizes;
      yellow: ISizes;
      green: ISizes;
      blue: ISizes;
      purple: ISizes;
      pink: ISizes;
    };
    // Radii
    radii: ISizes;
    // Borders
    borders: ISizes;
    // Shadows
    shadows: ISizes;
    // Fonts
    fontWeights: ISizes;
    fontSizes: ISizes;
    fonts: {
      default: string;
      alternative: string;
    };
    // Sizes
    sizes: {
      auto: string;
      quarter: string;
      half: string;
      full: string;
    };
    // Z Indices
    zIndices: {
      0: string;
      full: string;
    };
  }
}
