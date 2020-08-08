import { Box, useTheme } from "./Theme";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import RoundedIcon from "./RoundedIcon";

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
           <RoundedIcon  
           backgroundColor={!error ? "primary" : "danger2"} 
           name={!error ? "check" : "x"}
           size={SIZE}
           color="white"
           />
      )}
    </Box>
  );
});
TextInput.defaultProps = { variant: "default" };
export default TextInput;
