import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationProp } from "@react-navigation/stack";

export interface AuthNavigatonProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation:  CompositeNavigationProp<
  StackNavigationProp<AuthenticationRoutes, RouteName>,
  DrawerNavigationProp<AppRoutes, "Home">
>;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}
export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};
export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login:undefined;
  SignUp:undefined;
  ForgotPassword:undefined;
  PasswordChange:undefined;
};
export type HomeRoutes = {
  DashBoard:undefined;
}
