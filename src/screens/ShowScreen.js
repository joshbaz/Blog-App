import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation,  ...props }) => {
  const { state } = useContext(Context);
  console.log( props.route.params.id);
  const blogPost = state.find(
    (blogPost) => blogPost.id === props.route.params.id
  );
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
