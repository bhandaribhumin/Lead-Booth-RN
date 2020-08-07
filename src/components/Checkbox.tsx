import { Box, Text, Theme } from "./Theme";
import React, { ReactNode, useState } from "react";

import Animated from "react-native-reanimated";
import { Feather as Icon } from "@expo/vector-icons";
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
interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: () => void;
}
const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  const theme = useTheme<Theme>();
  return (
    <RectButton
      style={{ justifyContent: "center" }}
      onPress={() => onChange()}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="s"
          borderRadius={theme.borderRedius.s}
          height={20}
          width={20}
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? "primary" : "white"}
        >
          <Icon name="check" color="white"></Icon>
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};
Checkbox.defaultProps = { variant: "default" };
export default Checkbox;
