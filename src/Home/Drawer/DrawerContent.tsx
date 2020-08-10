import { Box, Header, RoundedIconButton, Text } from "./../../components";
import { Dimensions, Image, StyleSheet } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import DrawerMenu, { DrawerMenuProps } from "./DrawerMenu";

import React from "react";
import { useTheme } from "./../../components";

export const assets = [
  require("./../../components/assets/patterns/pattern1.png"),
];
const { width, height: cHeight } = Dimensions.get("window");

interface DrawerContentProps {}
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 400 / 1025;
const height = width * aspectRatio;
const items: DrawerMenuProps[] = [
  {
    icon: "x",
    label: "Home",
    screen: "Dashboard",
    color: "primary",
  },
  {
    icon: "lock",
    label: "Logout",
    screen: "Dashboard2",
    color: "secondary",
  },
];
const DrawerContent = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const REDIUS_SIZE = theme.borderRedius.xl;

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          borderBottomRightRadius={REDIUS_SIZE}
          backgroundColor="secondary"
        >
          <Header 
          title="my profile" 
          left={{ icon: "x", onPress:()=> navigation.dispatch(DrawerActions.closeDrawer) }} 
          right={{ icon: "shopping-bag", onPress:()=>true }}
          dark  />
        </Box>
      </Box>
      <Box flex={0.8} backgroundColor="white">
        <Box flex={1} backgroundColor="secondary"></Box>
        <Box flex={1} backgroundColor="primary"></Box>

        <Image
          style={{
            position: "absolute",
            bottom: -height * 0.55,
            left: 0,
            right: 0,
            width: DRAWER_WIDTH,
            height: height,
          }}
          source={assets[0]}
        />

        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          borderTopLeftRadius={REDIUS_SIZE}
          backgroundColor="white"
          borderBottomRightRadius={REDIUS_SIZE}
          justifyContent="center"
          padding="xl"
        >
          <Box
            position="absolute"
            left={DRAWER_WIDTH / 2 - 40}
            top={-40}
            backgroundColor="primary"
            style={{ borderRadius: 50 }}
            width={80}
            height={80}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Bhumin BH
            </Text>
            <Text variant="body" textAlign="center">
              bhandaribhumin@gmail.com
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerMenu key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        overflow="hidden"
        width={DRAWER_WIDTH}
        height={height * 0.68}
      >
        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
            width: width,
            height: height,
          }}
          source={assets[0]}
        />
      </Box>
    </Box>
  );
};

export default DrawerContent;
