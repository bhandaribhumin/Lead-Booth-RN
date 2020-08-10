import { Box, Text } from "./Theme";

import React from "react";
import RoundedIconButton from "./RoundedIconButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  right: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  dark?: boolean;
}
const Header = ({ left, title, right, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGray";
  return (
    <Box
      style={{ marginTop: insets.top }}
      paddingHorizontal="m"
      alignItem="center"
      flexDirection="row"
      justifyContent="space-between"
    >
      <RoundedIconButton
        name={left.icon}
        color="white"
        backgroundColor={backgroundColor}
        size={40}
        iconRatio={0.4}
        onPress={left.onPress}
        {...{ color }}
      />
      <Box justifyContent="center">
      <Text  variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      </Box>
      <RoundedIconButton
        name={right.icon}
        color="white"
        size={40}
        iconRatio={0.4}
        backgroundColor={backgroundColor}
        onPress={right.onPress}
        {...{ color }}
      />
    </Box>
  );
};
Header.defaultProps = {
  dark: false,
};
export default Header;
