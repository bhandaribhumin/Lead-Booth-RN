import { Dimensions, StyleSheet, Text, View } from "react-native";

import Animated from "react-native-reanimated";
import { Button } from "../../components";
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
   
    fontFamily: "SFProText-Semibold",
    fontSize:25,
    color:"#0C0D34",
    textAlign:"center",
    marginBottom:12
  },
  description: {
    fontSize:16,
    lineHeight:24,
    fontFamily: "SFProText-Regular",
    color:"#0C0D34",
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
     <Text style={style.subTitle}>{subTitle}</Text>
     <Text style={style.description}>{description}</Text>
     <Button 
      label={last ? "Les't Get started" : "Next"} 
     variant={last? "primary": "default"}
     {...{onPress}}
     ></Button>
    </View>
  );
};

export default SubSlide;
