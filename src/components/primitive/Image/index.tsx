import React from 'react';
import { Image as RNImage, ImageProps } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import {
  SpaceProps,
  space,
  FlexboxProps,
  flexbox,
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

import { styled } from '@definitions/styled';

type ImageType = SpaceProps &
  FlexboxProps &
  BorderProps &
  BorderRadiusProps &
  ShadowProps &
  PositionProps &
  LayoutProps &
  FastImageProps;

export const Image = styled(FastImage)<ImageType>`
  ${space}
  ${flexbox}
  ${position}
  ${border}
  ${shadow}
  ${layout}
  ${borderRadius}
  ${position}
`;
