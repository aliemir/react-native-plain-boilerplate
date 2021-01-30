import { ViewProps } from "react-native";
import {
  SpaceProps,
  FlexboxProps,
  ColorProps,
  BorderProps,
  ShadowProps,
  LayoutProps,
  BorderRadiusProps,
  PositionProps,
  space,
  flexbox,
  color,
  border,
  shadow,
  layout,
  borderRadius,
  position,
} from "styled-system";
import styled from "@/styled";

export type ViewType = SpaceProps &
  FlexboxProps &
  ColorProps &
  BorderProps &
  BorderRadiusProps &
  ShadowProps &
  ViewProps &
  PositionProps &
  LayoutProps;

export const Box = styled.View<ViewType>(
  space,
  flexbox,
  color,
  border,
  shadow,
  layout,
  borderRadius,
  position,
);

Box.defaultProps = {
  backgroundColor: "backgroundColor",
};
