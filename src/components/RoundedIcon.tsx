import { Box, Text, Theme, useTheme } from "./Theme";
import React, { ReactNode } from "react";

import Animated from "react-native-reanimated";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});
export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}
const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  const theme = useTheme();
const ICON_SIZE:number = size*0.8;
  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      marginRight="s"
      {...{ backgroundColor }}
      borderRadius={size / 2}
    >
      <Text style={{width:ICON_SIZE,height:ICON_SIZE}} {...{ color }}>
        <Icon 
        size={ICON_SIZE} 
        {...{ name }} 
      />
      </Text>
    </Box>
  );
};
export default RoundedIcon;
