//import liraries
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./Splash";
import { SCREENS } from "../common/Utils/Screens";
import Home from "./Home";

// create a component
const Router = () => {
  const Stack = createNativeStackNavigator();

  // Navigation Container for stack
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.Splash}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={SCREENS.Splash} component={Splash} />
        <Stack.Screen name={SCREENS.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Router;
