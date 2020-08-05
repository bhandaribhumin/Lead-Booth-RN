import { Box, Text, Theme } from "./Theme";
import React, { ReactNode, useState } from "react";

import Animated from "react-native-reanimated";
import { Ionicons } from '@expo/vector-icons';
import { TextInput as RNTextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

interface TextInputProps {
 icon:string;
 placeholder:string;
  validator:(input:string)=>boolean
}
const Valid=true;
const Invalid = false;
const Pristine = null;
type inputState = typeof Valid |  typeof Invalid | typeof Pristine;
const TextInput = ({ icon, placeholder, validator }: TextInputProps) => {
  const [valid, setvalid] = useState<inputState>(Pristine);
   return (
    <Box flexDirection="row" alignItems="center" >
      <Ionicons name={icon}></Ionicons>
      <RNTextInput underlineColorAndroid="transparent">
    {
      (valid === Valid || valid === Invalid) && (
        <Box />
      )
    }
      </RNTextInput>
    </Box>
  );
};
TextInput.defaultProps = { variant: "default" };
export default TextInput;
