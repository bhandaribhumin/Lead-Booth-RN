import {
  AuthenticationNavigator,
  assets as authenticationAssets,
} from "./src/Authentication";
import { assets as HomeAssets, HomeNavigator } from "./src/Home";
import React, {useEffect} from "react";

import { AppRoutes } from "./src/components/Navigation";
import { LoadAssets } from "./src/components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from "@shopify/restyle";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/components/Theme";

const assets = [...authenticationAssets,...HomeAssets];
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();
function App() {

  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            ></AppStack.Screen>
            <AppStack.Screen
              name="Home"
              component={HomeNavigator}
            ></AppStack.Screen>
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}

export default App;
