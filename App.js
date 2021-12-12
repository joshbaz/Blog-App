import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";

const Navigator = createStackNavigator();

export default () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Navigator.Navigator>
          <Navigator.Screen name="Blog" component={IndexScreen} />
        </Navigator.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
};
