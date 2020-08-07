import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from "react-native";
import React, { ReactNode, useState } from "react";
import theme, { Box, Text, Theme } from "./Theme";

import Animated from "react-native-reanimated";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  validator: (input: string) => boolean;
}
const SIZE = theme.borderRedius.l * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type inputState = typeof Valid | typeof Invalid | typeof Pristine;
const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [state, setState] = useState<inputState>(Pristine);
  const reColor: keyof typeof theme.colors =
    state === Pristine ? "primary" : state === Valid ? "primary" : "danger";
  const color
= theme.colors[reColor];
  const [input, setInput] = useState("");
  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };
  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };
  return (
    <Box
      flexDirection="row"
      borderRadius={theme.borderRedius.s}
      borderColor={reColor}
      height={48}
      borderWidth={1}
      alignItems="center"
    >
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }}></Icon>
      </Box>
      <RNTextInput
        underlineColorAndroid="transparent"
        placeholderTextColor={color}
        {...props}
        {...{ onChangeText }}
        onBlur={() => validate}
      >
        {(state === Valid || state === Invalid) && (
          <Box height={SIZE} width={SIZE} borderRadius={theme.borderRedius.m}>
            <Icon
              size={16}
              name={state == state ? "check" : "x"}
              color="white"
            ></Icon>
          </Box>
        )}
      </RNTextInput>
    </Box>
  );
};
TextInput.defaultProps = { variant: "default" };
export default TextInput;
