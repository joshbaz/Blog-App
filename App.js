import React from "react";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
const Navigator = createStackNavigator();

export default () => {
  return (
    <Provider>
      <NavigationContainer>
        <Navigator.Navigator>
          <Navigator.Screen name="Blog" component={IndexScreen} />
          <Navigator.Screen
            name="ShowScreen"
            component={ShowScreen}
          
          />
          <Navigator.Screen name="Create" component={CreateScreen} />
          <Navigator.Screen name="Edit" component={EditScreen} />
        </Navigator.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
