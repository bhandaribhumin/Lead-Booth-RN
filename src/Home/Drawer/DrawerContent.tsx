import { Box, Text } from "./../../components";
import { Dimensions, Image, Platform, StyleSheet } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";

import DrawerMenu from "./DrawerMenu";
import React from "react";
import { theme } from "./../../components/Theme";

const { width, height: cHeight } = Dimensions.get("window");

interface DrawerContentProps {}
export const DRAWER_WIDTH = width * 0.8;
const REDIUS_SIZE = theme.borderRedius.xl;
const aspectRatio = 360 / 847;
const height = width * aspectRatio;
const items = [
  {
    icon:"flash",
    label:"Outfit Ideas",
    screen:"Dashboard",
    color:"primary"
  },
  {
    icon:"flash",
    label:"Outfit Ideas",
    screen:"Dashboard2",
    color:"secondary"
  }
]
const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>
) => {
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          borderBottomRightRadius={REDIUS_SIZE}
          backgroundColor="secondary"
          overflow="hidden"
          height={height}
        >
           <Image
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          source={require("./../../components/assets/patterns/pattern3.jpg")}
        />
        </Box>
      </Box>
      <Box flex={0.8} backgroundColor="white">
        <Box flex={1} backgroundColor="secondary"></Box>
        <Box flex={1} backgroundColor="primary"></Box>
        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          borderTopLeftRadius={REDIUS_SIZE}
          backgroundColor="white"
          borderBottomRightRadius={REDIUS_SIZE}
        >
          {items.map(item=>(<DrawerMenu key={item.screen} {...item} />))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        overflow="hidden"
        width={DRAWER_WIDTH}
        height={height * 0.61}
      >
        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          source={require("./../../components/assets/patterns/pattern1.png")}
        />
      </Box>
    </Box>
  );
};

export default DrawerContent;
