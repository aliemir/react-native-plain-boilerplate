import {
  NativeSafeAreaViewProps,
  SafeAreaView as BaseSafeAreaView,
} from "react-native-safe-area-context";
import {
  SpaceProps,
  FlexboxProps,
  LayoutProps,
  ColorProps,
  space,
  flexbox,
  layout,
  color,
} from "styled-system";

import styled from "@/styled";

export type SafeViewType = SpaceProps &
  FlexboxProps &
  NativeSafeAreaViewProps &
  LayoutProps &
  ColorProps;

export const SafeAreaView = styled(BaseSafeAreaView)<SafeViewType>(
  space,
  flexbox,
  layout,
  color,
);

SafeAreaView.defaultProps = {
  backgroundColor: "backgroundColor",
  flex: 1,
};
