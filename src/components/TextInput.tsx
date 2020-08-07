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
const SIZE = theme.borderRedius.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type inputState = typeof Valid | typeof Invalid | typeof Pristine;
const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<inputState>(Pristine);

  const reColor: keyof typeof theme.colors =
    state === Pristine ? "text" : state === Valid ? "primary" : "danger2";
  const color = theme.colors[reColor];

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
  {
    console.log(reColor);
  }
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
      <Box flex={1}>
      <RNTextInput
        underlineColorAndroid="transparent"
        placeholderTextColor={color}
        onBlur={validate}
        {...{ onChangeText }}
        {...props}
      />
        </Box>
     
        {(state === Valid || state === Invalid) && (
          <Box
            height={SIZE}
            width={SIZE}
            justifyContent="center"
            alignItems="center"
            marginRight="s"
            backgroundColor={state === Valid ? "primary" : "danger2"}
            borderRadius={theme.borderRedius.m}
          >
            <Icon
              size={16}
              name={state == Valid ? "check" : "x"}
              color="white"
            ></Icon>
          </Box>
        )}
    
    </Box>
  );
};
TextInput.defaultProps = { variant: "default" };
export default TextInput;
