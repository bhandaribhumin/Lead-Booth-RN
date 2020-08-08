import { Box, RoundedIcon, Text } from "./../../components";
import { Dimensions, Image, Platform, StyleSheet } from "react-native";
import { Theme, theme } from "./../../components/Theme";

import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import {
    RectButton,
} from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

interface DrawerMenuProps {
    icon:string;
    color:keyof Theme["colors"],
    screen:string;
    label:string;
}

const DrawerMenu = (
 {icon,color,screen,label}:DrawerMenuProps
) => {
  return (
    <RectButton>
           <Box flexDirection="row">
               <RoundedIcon
              name={icon}
              size={36}
               backgroundColor={color}
               color={"white"} />
               <Text>{label}</Text>
               </Box> 
    </RectButton>
  );
};

export default DrawerMenu;
