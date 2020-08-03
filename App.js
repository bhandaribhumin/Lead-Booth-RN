import * as React from 'react';

import { LoadAssets } from './src/components';
import { Onboarding } from './src/Authentication';
import { createStackNavigator } from '@react-navigation/stack';

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
return(
<AuthenticationStack.Navigator headerMode="none">
  <AuthenticationStack.Screen name="Onboarding" component={Onboarding}></AuthenticationStack.Screen>
</AuthenticationStack.Navigator>);
};


const Stack = createStackNavigator();

function App() {
  return (
    <LoadAssets {...{fonts}}>
      <AuthenticationNavigator></AuthenticationNavigator>
    </LoadAssets>
  );
}

export default App;