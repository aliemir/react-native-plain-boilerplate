import { TextProps } from 'react-native';
import {
  ColorProps,
  SpaceProps,
  TypographyProps,
  BorderProps,
  LayoutProps,
  color,
  space,
  typography,
  border,
  layout,
} from 'styled-system';

import { styled } from '@definitions/styled';

export type TextType = LayoutProps & ColorProps & SpaceProps & TypographyProps & BorderProps & TextProps;

export const Text = styled.Text<TextType>`
  ${({ extraStyle }) => extraStyle && extraStyle};

  ${color};
  ${space};
  ${typography};
  ${border};
  ${layout};
`;
