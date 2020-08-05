import React, { ReactNode } from "react";
import { Text, Theme } from "./Theme";

import Animated from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";

const style = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});
interface ButtonProps {
  label?: string;
  variant: "default" | "primary" | "transparent";
  onPress: () => void;
  children: ReactNode;
}
const Button = ({ label, variant, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.button;
  return (
    <RectButton style={[style.container, { backgroundColor }]} {...{ onPress }}>
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};
Button.defaultProps = { variant: "default" };
export default Button;
