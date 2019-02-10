import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import App2 from "./app2/home";

import { Ionicons } from "@expo/vector-icons";

const A2 = createStackNavigator({
  home: {
    screen: App2,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(A2);
