import * as React from 'react';

import { AuthenticationNavigator, assets as authenticationAssets } from './src/Authentication';

import { LoadAssets } from './src/components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from "./src/components/Theme"

const assets= [...authenticationAssets]
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf")
};

function App() {
  return (
    <ThemeProvider {...{theme}}>
    <LoadAssets {...{fonts, assets}}>
      <SafeAreaProvider >
      <AuthenticationNavigator />
      </SafeAreaProvider>
    </LoadAssets>
    </ThemeProvider>
  );
}

export default App;