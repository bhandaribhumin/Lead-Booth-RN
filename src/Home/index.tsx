import Dashboard from "./DashBoard";
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export const HomeNavigator=() => 
  (
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
      </Drawer.Navigator>
    );
  