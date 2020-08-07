import  { Box, useTheme } from "./Theme";
import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import React, { ReactNode } from "react";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
interface containerProps {
  children: ReactNode;
  footer:ReactNode;
}
export const assets = [require("./assets/patterns/pattern1.png")];
const Container = ({children,footer}:containerProps) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="secondary">
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
      <Box
        borderBottomLeftRadius={theme.borderRedius.xl}
        overflow="hidden"
        height={height * 0.61}
      >
        <Image
          source={assets[0]}
          style={{
            width,
            height,
            borderBottomLeftRadius: theme.borderRedius.xl,
          }}
        />
      </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
           top: -height * 0.61,
          }}
        />
        <Box
          flex={1}
          borderRadius={theme.borderRedius.xl}
          borderTopLeftRadius={0}
          backgroundColor="white"
        >
          <KeyboardAwareScrollView>
        {children}
        </KeyboardAwareScrollView>
        </Box>
      </Box>
      <Box  backgroundColor="secondary"   >
          {footer}
          <Box height={insets.bottom}  />
      </Box>
    </Box>
  );
};

export default Container;
