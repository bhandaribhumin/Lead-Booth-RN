import * as React from 'react';

import { LoadAssets, theme } from './src/components';
import { Onboarding, Welcome, assets as authenticationAssets } from './src/Authentication';

import { Routes } from "./src/components/Navigation";
import {ThemeProvider} from '@shopify/restyle';
import { createStackNavigator } from '@react-navigation/stack';

const assets= [...authenticationAssets]
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf")
};

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => {
return(
<AuthenticationStack.Navigator headerMode="none">
  <AuthenticationStack.Screen name="Onboarding" component={Onboarding}></AuthenticationStack.Screen>
  <AuthenticationStack.Screen name="Welcome" component={Welcome}></AuthenticationStack.Screen>
</AuthenticationStack.Navigator>);
};



function App() {
  return (
    <ThemeProvider {...{theme}}>
    <LoadAssets {...{fonts, assets}}>
      <AuthenticationNavigator></AuthenticationNavigator>
    </LoadAssets>
    </ThemeProvider>
  );
}

export default App;