import { StyleSheet, Text, View } from "react-native";

import Animated from "react-native-reanimated";
import React from "react";
import { RectButton } from "react-native-gesture-handler";

const style = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProText-Regular",
  },
});
interface ButtonProps {
  label: string;
  variant: "default" | "primary";
  onPress: () => void;
}
const Button = ({ label, variant,onPress }: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? "#2CB9B0" : "rgba(12,13,52,.05)";
  const color = variant === "primary" ? "white" : "#0C0334";
  return (
    <RectButton 
    style={[style.container, { backgroundColor }]}
    {...{onPress}}>
      <Text style={[style.label, { color }]}>{label}</Text>
    </RectButton>
  );
};
Button.defaultProps = { variant: "default" };
export default Button;
