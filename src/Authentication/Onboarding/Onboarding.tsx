import Animated, {
  Extrapolate,
  divide,
  interpolate,
  multiply,
} from "react-native-reanimated";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Routes, StackNavigationProps } from "../../components/Navigation";
import Slide, { SLIDER_HEIGHT } from "./Slide";
import {
  interpolateColor,
  onScrollEvent,
  useScrollHandler,
  useValue,
} from "react-native-redash";

import Dot from "./Dot";
import SubSlide from "./SubSlide";
import { theme } from "../../components";

const { width } = Dimensions.get("window");
const slideItems = [
  {
    title: "JOBS",
    subTitle: "Job  Postings ",
    description:
      "Find Job Sites In Us. Check Out 1000+ Results from Across the Web. 100+ Million Visitors",
    color: "#BFEAF5",
    picture: {
      src: require("./../../../assets/slide/jobs2.png"),
      width: 612,
      height: 612,
    },
  },
  {
    title: "RETAILERS",
    subTitle: "Retailing at jw.in",
    description:
      "Explore vast selection of products from Top Brands. Pay on Delivery",
    color: "#BEECC4",
    picture: {
      src: require("./../../../assets/slide/Group-9.png"),
      width: 853,
      height: 1024,
    },
  },
  {
    title: "BUSINESS",
    subTitle: "BUSINESS Diaries",
    description:
      "Business Diaries Pioneers in the industry, we offer Heritage Diary from India.",
    color: "#FFE4D9",
    picture: {
      src: require("./../../../assets/slide/Lead_Generation.png"),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: "SERVICE",
    subTitle: "SERVICE at JW",
    description:
      "Business Diaries Pioneers in the industry, we offer Heritage Diary from India.",
    color: "#FFDDDD",
    picture: {
      src: require("./../../../assets/slide/grow.png"),
      width: 891,
      height: 928,
    },
  },
];

export const assets = slideItems.map((slide)=>slide.picture.src)
const Onboarding = ({navigation}:StackNavigationProps<Routes,"Onboarding">) => {
  const { scrollHandler, x } = useScrollHandler();
  const scroll = useRef<Animated.ScrollView>(null);
  const backgroundColor = interpolateColor(x, {
    inputRange: slideItems.map((_, i) => i * width),
    outputRange: slideItems.map((slide) => slide.color),
  });
  return (
    <View style={style.container}>
      <Animated.View style={[style.slider, { backgroundColor }]}>
        {slideItems.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.7) * width,
              index * width,
              (index + 0.7) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[style.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRedius.xl,
                  height:
                    ((width - theme.borderRedius.xl) * picture.height) / picture.width,
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slideItems.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={style.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={style.footerContent}>
          <View style={[style.pagination]}>
            {slideItems.map((_, index) => (
              <Dot
                currentIndex={divide(x, width)}
                key={index}
                {...{ index, x }}
              />
            ))}
          </View>

          <Animated.View
            style={{
              width: width * slideItems.length,
              flex: 1,
              flexDirection: "row",
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slideItems.map(({ subTitle, description }, index) => {
              const  last = index === slideItems.length - 1
              return(
              <SubSlide
                key={index}
                onPress={() => {
                  if(last){
                    navigation.navigate("Welcome");
                  } else if (scroll.current) {
                    scroll.current
                      ?.getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                {...{ subTitle, description,last }}
              />
            )})}
          </Animated.View>
        </View>
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
    borderBottomRightRadius: theme.borderRedius.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    //flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRedius.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRedius.xl,
    flexDirection: "row",
    // backgroundColor: "rgba(100,200,300,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: theme.borderRedius.xl,
    overflow: "hidden",
  },
});

export default Onboarding;
