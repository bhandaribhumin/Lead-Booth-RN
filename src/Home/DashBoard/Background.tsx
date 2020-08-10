import { Box, Header, Text, useTheme } from "../../components";
import { Dimensions, Image, Platform, StyleSheet, View } from "react-native";

import React from "react";

interface BackgroundProps {}
const Background = () => {
  const theme = useTheme();
  const radius = theme.borderRedius.xl;
  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box
          flex={1}
          backgroundColor="white"
          borderBottomRightRadius={radius}
        ></Box>
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor="white"></Box>
        <Box flex={1} backgroundColor="secondary"></Box>
        <Image
          source={require("./assets/background.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: radius,
            borderBottomRightRadius: radius,
          }}
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box flex={1} backgroundColor="secondary" borderTopLeftRadius={radius}></Box>
      </Box>
    </View>
  );
};

export default Background;
