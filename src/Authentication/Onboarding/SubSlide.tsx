import { Button, Text, makeStyles } from "../../components";
import { Dimensions, StyleSheet, View } from "react-native";

import Animated from "react-native-reanimated";
import React from "react";
import { Theme } from "../../components/Theme";

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;

const useStyles = makeStyles((theme:Theme) => ({
  container: {
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  padding:theme.spacing.xl
  },
  subTitle: {
    textAlign:"center",
    marginBottom:12
  },
  description: {
    textAlign:"center",
    marginBottom:theme.spacing.m
  },
}));
interface SubSlideProps {
    subTitle: string;
    description: boolean;
    last?:boolean;
    onPress: () => void;
    
}
const SubSlide = ({ subTitle,description,last,onPress }: SubSlideProps) => {
  const style = useStyles();
  return (
    <View style={style.container}>
     <Text variant="title2" style={style.subTitle}>{subTitle}</Text>
     <Text variant="body" style={style.description}>{description}</Text>
     <Button 
      label={last ? "Les't Get started" : "Next"} 
     variant={last? "primary": "default"}
     {...{onPress}}
     ></Button>
    </View>
  );
};

export default SubSlide;
