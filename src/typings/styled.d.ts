export interface BaseTheme {
  colors: {
    main: string;
    secondary: string;
  };
  fontWeights: {};
}

export interface DefaultTheme extends BaseTheme {}

export type StyledTheme = DefaultTheme;
