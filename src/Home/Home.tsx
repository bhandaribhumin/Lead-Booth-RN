import { Box, Text, useTheme } from "../../components/Theme";
import { Dimensions, Image, StyleSheet } from "react-native";

import React from "react";

const { width } = Dimensions.get("window");
const picture = {
  src: require("./../../../assets/slide/group.png"),
  width: 768,
  height: 1000,
};
export const assets = [picture.src];
const Home = () => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
        <Text>Home</Text>
    </Box>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Home;
