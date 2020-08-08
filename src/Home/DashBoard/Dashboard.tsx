import { Box, Text, useTheme } from "../../components/Theme";
import { Dimensions, Image, StyleSheet } from "react-native";

import React from "react";

const { width } = Dimensions.get("window");


const Dashboard = () => {
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

export default Dashboard;
