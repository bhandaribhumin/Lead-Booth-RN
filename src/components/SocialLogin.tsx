import { Box, useTheme } from "./Theme";
import { FaceBookSVG, GoogleSVG } from "./assets";
import React, { ReactNode } from "react";

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
interface socialIconProps {
  children: ReactNode;
}
const SocialIcon = ({ children }: socialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRedius.l * 2;

  return (
    <Box
      marginHorizontal="s"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius={theme.borderRedius.l}
    >
      {children}
    </Box>
  );
};
const SocialLogin = () => {
  const theme = useTheme();
  return (
    <Box
      marginTop="m"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <SocialIcon>
        <GoogleSVG />
      </SocialIcon>
      <SocialIcon>
        <FaceBookSVG />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
