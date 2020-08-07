import { Box, Text, useTheme } from "../../components/Theme";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Routes, StackNavigationProps } from "../../components/Navigation";

import { Button } from "../../components";
import React from "react";

const { width } = Dimensions.get("window");
const picture = {
  src: require("./../../../assets/slide/group.png"),
  width: 768,
  height: 1000,
};
export const assets = [picture.src];
const Welcome = ({navigation}:StackNavigationProps<Routes,"Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius={theme.borderRedius.xl}
        alignItems="center"
        justifyContent="flex-end"
        backgroundColor="grey"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRedius.xl,
            height:
              ((width - theme.borderRedius.xl) * picture.height) /
              picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderBottomRightRadius={theme.borderRedius.xl}>
        <Box
          backgroundColor="grey"
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
        >
          <Box
            backgroundColor="white"
            borderTopLeftRadius={theme.borderRedius.xl}
            flex={1}
            justifyContent="space-evenly"
            alignItems="center"
            padding="xl"
          >
            <Text variant="title2">Let's get start</Text>
            <Text variant="body" textAlign="center">
              Login to your account below or signup for an amazing experience
            </Text>
            <Button variant="primary" label="Have an account? Login" onPress={()=>navigation.navigate("Login")}></Button>
            <Button  label="Join us, it's free"  onPress={()=>navigation.navigate("SignUp")}></Button>
            <Button variant="transparent" label="Forget password" onPress={()=> navigation.navigate("ForgotPassword")}></Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Welcome;
