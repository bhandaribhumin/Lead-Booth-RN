import { Box, RoundedIconButton, Text } from "./../../components";
import { Dimensions, Image, StyleSheet } from "react-native";
import DrawerMenu, { DrawerMenuProps } from "./DrawerMenu";

import React from "react";
import { theme } from "./../../components/Theme";

const { width, height: cHeight } = Dimensions.get("window");

interface DrawerContentProps {}
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 360 / 847;
const height = width * aspectRatio;
const items: DrawerMenuProps[] = [
  {
    icon: "x",
    label: "Outfit Ideas",
    screen: "Dashboard",
    color: "primary",
  },
  {
    icon: "lock",
    label: "Outfit Ideas",
    screen: "Dashboard2",
    color: "secondary",
  },
];
const DrawerContent = () => {
  //const theme = useTheme();
  const REDIUS_SIZE = theme.borderRedius.xl;

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          style={{ ...StyleSheet.absoluteFillObject, paddingTop: 30 }}
          borderBottomRightRadius={REDIUS_SIZE}
          justifyContent="space-between"
          backgroundColor="secondary"
          flexDirection="row"
        >
          <RoundedIconButton
            name="x"
            color="white"
            backgroundColor="secondary"
            size={24}
            onPress={() => true}
          />
          <Text color="white">MY PROFILE</Text>
          <RoundedIconButton
            name="shopping-bag"
            color="white"
            size={24}
            backgroundColor="secondary"
            onPress={() => true}
          />
        </Box>
      </Box>
      <Box flex={0.8} backgroundColor="white">
        <Box flex={1} backgroundColor="secondary"></Box>
        <Box flex={1} backgroundColor="primary"></Box>
        <Image
          style={{
            position: "absolute",
            bottom: -height * 0.61,
            left: 0,
            right: 0,
            width: DRAWER_WIDTH,
            height: height,
          }}
          source={require("./../../components/assets/patterns/pattern1.png")}
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
            left={DRAWER_WIDTH / 2 - 50}
            top={-50}
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
