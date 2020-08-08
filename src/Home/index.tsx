import Home from "./Home";
import React from "react";
import { Routes } from "../components/Navigation";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const HomeNavigator=() => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    );
  }