
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "../navigation/TabNavigator"; 
import Profile from "../screens/Profile";

return (
<DrawerNavigator>
<Drawer.Screen name="Home" component= {TabNavigator} />
<Drawer.Screen name="Profile" component={Profile} />
</DrawerNavigator>

)
export default DrawerNavigator;

