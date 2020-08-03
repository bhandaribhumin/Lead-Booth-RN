import { Dimensions, StyleSheet, Text, View } from "react-native";

import React from "react";

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;

const style = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 60,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
    lineHeight: 80,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});
interface SlideProps {
    title: string;
  right?: boolean;
}
const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? width/2 -50 : -width/2 +50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={style.container}>
      <View style={[style.titleContainer, {transform}]}>
        <Text style={style.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
