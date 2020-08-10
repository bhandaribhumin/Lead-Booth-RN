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
  iconRatio:number;
}
const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio
}: RoundedIconProps) => {
    const iconSize = size * 0.7;
  const theme = useTheme();
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
      <Text style={{width:iconSize,height:iconSize}} {...{ color }}>
        <Icon 
        size={iconSize} 
        {...{ name }} 
      />
      </Text>
    </Box>
  );
};
RoundedIcon.defaultProps={
    iconRatio : 0.7
} 
export default RoundedIcon;
