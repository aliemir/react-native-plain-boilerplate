// eslint-disable-next-line no-restricted-imports
import * as styledComponents from 'styled-components/native';
import { StyledTheme } from '@typings/styled';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<StyledTheme>;

export { css, ThemeProvider };
export default styled;
