import Animated, { Extrapolate, interpolate } from "react-native-reanimated";

import { Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}
const Dot = ({ index, currentIndex }: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        opacity,
        width: 8,
        borderRadius: 4,
        height: 8,
        backgroundColor: "#2CB9B0",
        margin: 4,
        transform: [{ scale }],
      }}
    ></Animated.View>
  );
};

export default Dot;
