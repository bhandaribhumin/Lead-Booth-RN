import * as React from "react";

import {
  AuthenticationNavigator,
  assets as authenticationAssets,
} from "./src/Authentication";

import {HomeNavigator} from "./src/Home";
import { LoadAssets } from "./src/components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@shopify/restyle";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/components/Theme";

const assets = [...authenticationAssets];
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
};
type AppStackRoutes = {
  Authentication: undefined;
  Home: undefined;
};
const AppStack = createStackNavigator<AppStackRoutes>();
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
