import { ViewProps } from 'react-native';
import {
  SpaceProps,
  space,
  FlexboxProps,
  flexbox,
  ColorProps,
  color,
  BorderProps,
  border,
  ShadowProps,
  shadow,
  LayoutProps,
  layout,
  BorderRadiusProps,
  borderRadius,
  position,
  PositionProps,
} from 'styled-system';

import styled from '@definitions/styled';

export type ViewType = SpaceProps &
  FlexboxProps &
  ColorProps &
  BorderProps &
  BorderRadiusProps &
  ShadowProps &
  ViewProps &
  PositionProps &
  LayoutProps;

export const Box = styled.View<ViewType>`
  ${space}
  ${flexbox}
    ${color}
    ${position}
    ${border}
    ${shadow}
    ${layout}
    ${borderRadius}
    ${position}
`;
