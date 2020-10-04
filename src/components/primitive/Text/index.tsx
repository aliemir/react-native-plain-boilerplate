import { TextProps } from 'react-native';
import { CSSProp } from 'styled-components';
import { ColorProps, SpaceProps, TypographyProps, BorderProps, color, space, typography, border } from 'styled-system';

import { styled } from '@definitions/styled';

export type TextType = ColorProps & SpaceProps & TypographyProps & BorderProps & TextProps & { extraStyle?: CSSProp };

export const Text = styled.Text<TextType>`
  ${({ extraStyle }) => extraStyle && extraStyle};

  ${color};
  ${space};
  ${typography};
  ${border};
`;
