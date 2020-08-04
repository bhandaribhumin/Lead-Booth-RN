import { Button, Text } from "../../components";
import { Dimensions, StyleSheet, View } from "react-native";

import Animated from "react-native-reanimated";
import React from "react";

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;

const style = StyleSheet.create({
  container: {
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  padding:44
  },
  subTitle: {
    textAlign:"center",
    marginBottom:12
  },
  description: {
    textAlign:"center",
    marginBottom:40
  },
});
interface SubSlideProps {
    subTitle: string;
    description: boolean;
    last?:boolean;
    onPress: () => void;
    
}
const SubSlide = ({ subTitle,description,last,onPress }: SubSlideProps) => {

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
