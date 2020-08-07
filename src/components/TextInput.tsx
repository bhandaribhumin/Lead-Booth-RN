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
  touched?:boolean;
  error?:string;
}
const SIZE = theme.borderRedius.m * 2;

const TextInput = ({ icon,  touched, error,...props }: TextInputProps) => {
  const reColor = !touched ? "text" : (error?"danger2":"primary");
  const color = theme.colors[reColor];
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
        {...props}
      />
        </Box>
     
        {touched && (
          <Box
            height={SIZE}
            width={SIZE}
            justifyContent="center"
            alignItems="center"
            marginRight="s"
            backgroundColor={!error ? "primary" : "danger2"}
            borderRadius={theme.borderRedius.m}
          >
            <Icon
              size={16}
              name={!error ? "check" : "x"}
              color="white"
            ></Icon>
          </Box>
        )}
    
    </Box>
  );
};
TextInput.defaultProps = { variant: "default" };
export default TextInput;
