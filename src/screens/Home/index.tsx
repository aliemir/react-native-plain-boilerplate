import React from "react";
import { Box, SafeAreaView, Text } from "@/components";

export const Home = () => {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]}>
      <Box flex={1}>
        <Text>home screen</Text>
      </Box>
    </SafeAreaView>
  );
};
