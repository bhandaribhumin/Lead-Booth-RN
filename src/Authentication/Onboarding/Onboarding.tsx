import Animated, { multiply } from "react-native-reanimated";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useRef } from 'react';
import Slide, { SLIDER_HEIGHT } from "./Slide";
import { interpolateColor, onScrollEvent, useValue } from "react-native-redash";

import SubSlide from "./SubSlide";

const BORDER_REDIUS = 75;
const { width } = Dimensions.get("window");
const slideItems = [
  {
    title: "JOBS",
    subTitle: "Job  Postings ",
    description: "Find Job Sites In Us. Check Out 1000+ Results from Across the Web. 100+ Million Visitors",
    color: "#BFEAF5",
  },
  {
    title: "RETAILERS",
    subTitle: "Retailing at jw.in",
    description: "Explore vast selection of products from Top Brands. Pay on Delivery",
    color: "#BEECC4",
  },
  {
    title: "BUSINESS",
    subTitle: "BUSINESS Diaries",
    description: "Business Diaries Pioneers in the industry, we offer Heritage Diary from India.",
    color: "#FFE4D9",
  },
  {
    title: "SERVICE",
    subTitle: "SERVICE at JW",
    description: "Business Diaries Pioneers in the industry, we offer Heritage Diary from India.",
    color: "#FFDDDD",
  },
];
const Onboarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const scroll = useRef<Animated.ScrollView>(null);
  const backgroundColor = interpolateColor(x, {
    inputRange: slideItems.map((_, i) => i * width),
    outputRange: slideItems.map((slide) => slide.color),
  });
  return (
    <View style={style.container}>
      <Animated.View style={[style.slider, { backgroundColor }]}>
        <Animated.ScrollView
        ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...{ onScroll }}
        >
          {slideItems.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={style.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View style={[style.footerContent,{width:width * slideItems.length,flex:1, transform : [{translateX:multiply(x,-1)}]}]}>
          {slideItems.map(({ subTitle, description }, index) => (
            <SubSlide
              key={index}
              onPress={()=>{
                if(scroll.current){
                  scroll.current.getNode().scrollTo({x:width* (index +1), animated:true})
                }
              }}
              last={index === slideItems.length - 1}
              {...{ subTitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: BORDER_REDIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    
    flexDirection:"row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_REDIUS,
  },
});

export default Onboarding;
