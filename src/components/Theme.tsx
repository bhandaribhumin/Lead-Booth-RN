import {ImageStyles, TextStyles, ViewStyles} from "react-native";
import { createBox, createText, useTheme as useReTheme } from '@shopify/restyle'

export const theme = {
  colors: {
    primary:"#2CB9B0",
    secondary:"#0C0D34",
    text:"rgba(12,13,52,0.7)",
    white:"#FFFFFF",
    grey:"rgba(12,14,52,0.05)",
    button:"#0C0D34",
    danger2:"#FF0058",
    darkGray:"#8A8D90"
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRedius:{
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants:{
    hero:{
        fontSize: 70,
        lineHeight: 80,
        fontFamily: "SFProDisplay-Bold",
        color: "white",
        textAlign: "center"
    },
    title1:{
        fontSize: 28,
        fontFamily: "SFProDisplay-Semibold",
        color: "secondary",
    },
    title2:{
        fontSize: 24,
        lineHeight: 30,
        fontFamily: "SFProDisplay-Semibold",
        color: "secondary",
    },
    body:{
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "SFProDisplay-Regular",
        color: "text",
        
    },
    button:{
        fontSize: 15,
        fontFamily: "SFProDisplay-Medium",
        color: "text",
    }
  },
  breakpoints: { },
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
type NamedStyles<T> = {[P in keyof T]:ViewStyles | TextStyles | ImageStyles}
export const makeStyles = <T extends NamedStyles<T>>(
    styles:(theme:Theme)=> T
)=>()=>{
  const currentTheme = useTheme();
  return styles(currentTheme)
}
// export default theme;