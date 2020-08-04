import { Dimensions, StyleSheet, Text, View } from "react-native";

import Animated from "react-native-reanimated";
import React from "react";

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;

const style = StyleSheet.create({
  container: {
    width:8,
    borderRadius:4,
    height:8,
    backgroundColor:"#2CB9B0"
  }
});
interface DotProps {
    index: string;
    currentIndex:Animated.Node<number>
}
const Dot = ({ index, currentIndex }: DotProps) => {
  const transform = [
   
  ];
  return (
    <Animated.View style={style.container}>
    </Animated.View>
  );
};

export default Dot;
