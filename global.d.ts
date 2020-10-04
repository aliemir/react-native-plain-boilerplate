import 'styled-components';

import { StyledTheme } from '@typings/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends StyledTheme {}
}
