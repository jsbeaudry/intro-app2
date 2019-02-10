import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Dimensions,
  Text,
  View,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default class Intro1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afbe9f5cf4e0194b07648afd2ab3e887&w=1000&q=80"
        }}
        style={{
          flex: 1,
          width: screenWidth,
          flexDirection: "column",
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            flex: 1,
            width: screenWidth,
            backgroundColor: "rgba(60, 40, 175,.6)",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              height: 370,
              width: 250,
              marginTop: 0,
              alignSelf: "center",
              backgroundColor: "#fff",
              borderRadius: 10
            }}
          >
            <ImageBackground
              source={{
                uri:
                  "https://security-img.scdn6.secure.raxcdn.com/moreimages/employment-checks-2.png"
              }}
              borderTopLeftRadius={10}
              style={{
                width: 250,
                height: 150,
                flexDirection: "column",
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginTop: 30,
                color: "#000",
                fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                fontSize: 20,
                marginBottom: 30,
                fontWeight: "100"
              }}
            >
              Business
            </Text>

            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",

                height: 88,
                color: "grey",
                fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 22
              }}
            >
              Donec facilisis tortor ut augue lacinia, at viverra est semper.
              Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
              Pellentesque non dignissim neque.
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
