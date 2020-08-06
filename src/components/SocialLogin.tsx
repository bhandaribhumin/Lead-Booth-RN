import { Dimensions, Image, StatusBar, StyleSheet, Text } from "react-native";
import { FaceBookSVG, GoogleSVG } from "./assets"
import React, { ReactNode } from "react";
import theme, { Box } from "./Theme";

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
interface socialIconProps {
  children:ReactNode
}
const SIZE = theme.borderRedius.l * 2;
const SocialIcon = ({children}:socialIconProps) => {
  return(
   
    <Box   marginHorizontal="s" justifyContent="center" alignItems="center" backgroundColor="white" width={SIZE} height={SIZE} borderRadius={theme.borderRedius.l}>
    { children}
      </Box>
     
  )
}
const SocialLogin = () => {
  return (
    <Box style={style.container}>
          <SocialIcon >
            <GoogleSVG/>
        </SocialIcon>
        <SocialIcon >
            <FaceBookSVG/>
        </SocialIcon>
    </Box>
  );
};
const style = StyleSheet.create({
  container:{
    flexDirection:"row",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingBottom:theme.borderRedius.l
  }
})
export default SocialLogin;
