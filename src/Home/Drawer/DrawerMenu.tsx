import { Box, RoundedIcon, Text } from "./../../components";
import { Dimensions, Image, Platform, StyleSheet } from "react-native";

import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Theme } from "./../../components/Theme";
import { useTheme } from "@shopify/restyle";

const { width, height } = Dimensions.get("window");

export interface DrawerMenuProps {
  icon: string;
  color: keyof Theme["colors"];
  screen: string;
  label: string;
}

const DrawerMenu = ({ icon, color, screen, label }: DrawerMenuProps) => {
    const theme = useTheme();
  return (
    <RectButton style={{borderRedius:theme.borderRedius.m}}>
      <Box flexDirection="row" alignItems="center" padding="m" borderRedius={theme.borderRedius.m}>
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={36}
          backgroundColor={color}
          color={"white"}
        />
        <Text variant="button" color="secondary" marginLeft="m">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default DrawerMenu;
