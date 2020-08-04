import { Dimensions, Image, StyleSheet, View } from "react-native";

import React from "react";
import { Text } from "./../../components";

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;

const style = StyleSheet.create({
  container: {
    width,
  },
  title: {},
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
 
  picture: {
    ...StyleSheet.absoluteFillObject,
  },
});
interface SlideProps {
  title: string;
  right?: boolean
}
const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={style.container}>
     
      <View style={[style.titleContainer, { transform }]}>
        <Text variant="hero" style={style.title}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Slide;
