import Onboarding, { assets as onBoardingAssets } from "./Onboarding";
import Welcome, { assets as welcomeAssets } from "./Welcome";

import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import React from "react";
import { Routes } from "../components/Navigation";
import SignUp from "./SignUp";
import { createStackNavigator } from "@react-navigation/stack";

export const assets = [...onBoardingAssets,...welcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => {
return(
<AuthenticationStack.Navigator headerMode="none">
  <AuthenticationStack.Screen name="Onboarding" component={Onboarding}></AuthenticationStack.Screen>
  <AuthenticationStack.Screen name="Welcome" component={Welcome}></AuthenticationStack.Screen>
  <AuthenticationStack.Screen name="Login" component={Login}></AuthenticationStack.Screen>
  <AuthenticationStack.Screen name="SignUp" component={SignUp}></AuthenticationStack.Screen>
  <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword}></AuthenticationStack.Screen>
</AuthenticationStack.Navigator>);
};