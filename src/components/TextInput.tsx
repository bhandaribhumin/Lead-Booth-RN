import { Box, useTheme } from "./Theme";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";
import React from "react";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = React.forwardRef<RNTextInput,TextInputProps>(({ icon, touched, error, ...props },ref) => {
  const theme = useTheme();
  const reColor = !touched ? "text" : error ? "danger2" : "primary";
  const color = theme.colors[reColor];
  const SIZE = theme.borderRedius.m * 2;
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
        {...{ref}}
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
          <Icon size={16} name={!error ? "check" : "x"} color="white"></Icon>
        </Box>
      )}
    </Box>
  );
});
TextInput.defaultProps = { variant: "default" };
export default TextInput;
