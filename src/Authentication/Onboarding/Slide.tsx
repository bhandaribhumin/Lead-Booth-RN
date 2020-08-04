import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import { BORDER_REDIUS } from "./Onboarding";
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
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_REDIUS,
  },
});
interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}
const Slide = ({ title, right, picture }: SlideProps) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={style.container}>
      <View style={style.underlay}>
        <Image source={picture} style={style.picture} />
      </View>
      <View style={[style.titleContainer, { transform }]}>
        <Text style={style.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
