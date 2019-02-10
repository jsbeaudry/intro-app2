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
            "https://japantoday-asset.scdn3.secure.raxcdn.com/img/store/b7/db/6ec3544cd26f490753159849af1c75dcb198/anime/_w850.jpg"
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
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-waQNais_Q6CYY6KL15Io-icTRLk9Z_TUvQsSWlc1XXzP9puN"
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
                marginBottom: 20,
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
            <TouchableOpacity
              style={{
                width: 150,
                height: 30,
                margin: 10,
                alignSelf: "center",
                backgroundColor: "#000",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  alignSelf: "center",

                  color: "#fff",
                  fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                  fontSize: 10,
                  fontWeight: "100"
                }}
              >
                GET STARTED NOW
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
