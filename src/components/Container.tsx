import { Box, useTheme } from "./Theme";
import { Dimensions, Image, Platform, StyleSheet } from "react-native";
import React, { ReactNode } from "react";

import Constants from "expo-constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
interface containerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}
export const assets = [
  require("./assets/patterns/pattern1.png"),
  require("./assets/patterns/pattern1.png"),
  require("./assets/patterns/pattern1.png"),
] as const;
const Container = ({ children, footer, pattern }: containerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];
  const statusBarHeight: number =
    Platform.OS === "android" ? Constants.statusBarHeight : 0;
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={wHeight + statusBarHeight} backgroundColor="secondary">
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius={theme.borderRedius.xl}
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={asset}
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
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              height,
              width,
              left:width*0.4,
            }}
          />
         <Box
            flex={1}
            borderRadius={theme.borderRedius.xl}
            borderTopLeftRadius={0}
            backgroundColor="white"
            justifyContent="center"
            padding="xl"
          >
            {children}
          </Box> 
        </Box>

        <Box
          height={height * 0.6}
          justifyContent="center"
          alignItems="center"
          backgroundColor="secondary"
         
        >
          {footer}
          <Box height={insets.bottom+20} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
