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
    title: "Relaxed",
    subTitle: "hey chey abcabcabcabc",
    description: "hjfgh assdasda dasd a sa  sd as",
    color: "#BFEAF5",
  },
  {
    title: "Playful",
    subTitle: "hey ab abab c",
    description: "uyttyu asdas sdasdasadfdhfgfgg das d",
    color: "#BEECC4",
  },
  {
    title: "Exentric",
    subTitle: "hey abcabcabcabc",
    description: "ewrrer asd asdas sdasda dsadasdas d",
    color: "#FFE4D9",
  },
  {
    title: "Funky",
    subTitle: "hey abcabcabbcabc",
    description: "gfhfgh asdas sdasdfghfgha das d",
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
