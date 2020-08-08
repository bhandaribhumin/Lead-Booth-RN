import * as React from "react";

import DrawerContent,{DRAWER_WIDTH} from "./Drawer";

import DashBoard from "./DashBoard";
import { HomeRoutes } from "../components/Navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => {
  return (
    <Drawer.Navigator  
    drawerContent={DrawerContent}
    drawerStyle={{width:DRAWER_WIDTH}}>
      <Drawer.Screen name="DashBoard" component={DashBoard} />
    </Drawer.Navigator>
  );
};
