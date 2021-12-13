import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation, ...props }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
       <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: props.route.params.id })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const { state } = useContext(Context);
  console.log(props.route.params.id);
  const blogPost = state.find(
    (blogPost) => blogPost.id === props.route.params.id
  );
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

// ShowScreen.options = ({ navigation, ...props }) => {
//   return {
//     headerRight: (
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate("Edit", { id: props.route.params.id })
//         }
//       >
//         <EvilIcons name="pencil" size={35} />
//       </TouchableOpacity>
//     ),
//   };
// };

const styles = StyleSheet.create({});

export default ShowScreen;
