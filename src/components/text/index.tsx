import { TextProps } from "react-native";
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
} from "styled-system";

import styled from "@/styled";

export type TextType = LayoutProps &
  ColorProps &
  SpaceProps &
  TypographyProps &
  BorderProps &
  TextProps;

export const Text = styled.Text<TextType>(
  color,
  space,
  typography,
  border,
  layout,
);

Text.defaultProps = {
  fontFamily: "Rubik",
  fontWeight: 400,
  fontSize: "16px",
  color: "textColor",
};
