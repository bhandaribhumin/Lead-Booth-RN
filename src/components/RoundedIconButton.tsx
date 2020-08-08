import { Box, Text, Theme, useTheme } from "./Theme";
import React, { ReactNode } from "react";
import RoundedIcon,{RoundedIconProps} from "./RoundedIcon"

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
interface RoundedIconButtonProps extends RoundedIconProps{
  onPress:()=> void;
}
const RoundedIconButton = ({
  onPress,...props
}: RoundedIconButtonProps) => {
  const theme = useTheme();

  return (
    <RectButton {...{onPress}}>
      <RoundedIcon {...props}/>
    </RectButton>
  );
};
export default RoundedIconButton;
