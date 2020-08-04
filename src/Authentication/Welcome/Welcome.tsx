import { Dimensions, Image, StyleSheet } from "react-native";
import theme, { Box, Text } from "../../components/Theme";

import { Button } from "../../components";
import React from "react";

const { width } = Dimensions.get("window");
const picture = {
  src: require("./../../../assets/slide/group.png"),
  width: 768,
  height: 1000,
};
export const assets = [picture.src];
const Welcome = () => {
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
            <Button variant="primary" label="Have an account? Login"></Button>
            <Button  label="Join us, it's free"></Button>
            <Button variant="transparent" label="Forget password"></Button>
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
