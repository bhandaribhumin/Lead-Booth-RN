import Onboarding, { assets as onBoardingAssets } from "./Onboarding";
import Welcome, { assets as welcomeAssets } from "./Welcome";

import { AuthenticationRoutes } from "../components/Navigation";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import PasswordChange from "./PasswordChange";
import React from "react";
import SignUp from "./SignUp";
import { createStackNavigator } from "@react-navigation/stack";

export const assets = [...onBoardingAssets,...welcomeAssets];

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();


export const AuthenticationNavigator = () => {
return(
<AuthenticationStack.Navigator headerMode="none">
  <AuthenticationStack.Screen name="Onboarding" component={Onboarding}></AuthenticationStack.Screen>
  <AuthenticationStack.Screen name="Welcome" component={Welcome}></AuthenticationStack.Screen>
  <AuthenticationStack.Screen name="Login" component={Login}></AuthenticationStack.Screen>
  <AuthenticationStack.Screen name="SignUp" component={SignUp}></AuthenticationStack.Screen>
  <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword}></AuthenticationStack.Screen>
  <AuthenticationStack.Screen name="PasswordChange" component={PasswordChange}></AuthenticationStack.Screen>
</AuthenticationStack.Navigator>
);
};