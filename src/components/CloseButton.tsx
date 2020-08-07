import { Box, Text } from "./Theme";

import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { RectButton } from "react-native-gesture-handler";

interface CloseButtonProps {
  onPress: () => void;
  title?: string;
}
const SIZE = 60;
const CloseButton = ({ onPress, title }: CloseButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <Box
        height={SIZE} width={SIZE}
        backgroundColor="white"
        borderRadius={SIZE / 2}
        justifyContent="center"
        alignItems="center"
      >
        <Text color="secondary">
          <Icon name="x" size={45}></Icon>
        </Text>
      </Box>
    </RectButton>
  );
};

export default CloseButton;
