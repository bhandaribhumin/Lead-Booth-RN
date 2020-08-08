import * as React from "react";

import DashBoard from "./DashBoard";
import { HomeRoutes } from "../components/Navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DashBoard" component={DashBoard} />
    </Drawer.Navigator>
  );
};
