import Animated, { add } from "react-native-reanimated";
import { Box, Header, Text, useTheme } from "../../components";
import { Dimensions, Image, Platform, StyleSheet, View } from "react-native";
import {
  interpolateColor,
  mix,
  mixColor,
  usePanGestureHandler
} from "react-native-redash";

import { PanGestureHandler } from "react-native-gesture-handler";
import React from "react";
import { useSpring } from "./Animations";

interface CardProps {
  position: Animated.Adaptable<number>;
  onSwipe: () => void;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const width = wWidth * 0.8;
const height = width * (425 / 295);

const Card = ({ position,onSwipe }: CardProps) => {
  const theme = useTheme();
  const radius = theme.borderRedius.m;
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();

  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wHeight],
    onSnap : ([x])=> x !== 0 && onSwipe()
  });
  const translateY = add(
    translateYOffset,
    useSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: [0],
  }));
  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius: radius,
            transform: [{ translateY },{translateX}, { scale }],
          }}
        ></Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
