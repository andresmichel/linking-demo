/**
 * Basic You.i RN app
 */
import React, { useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { DeviceInfo, Linking } from "@youi/react-native-youi";

const platform = DeviceInfo.getSystemName();

const getPrimeURL = (id) => {
  switch (platform) {
    case "iOS":
    case "tvOS":
      return `aiv://aiv/play?asin=${id}`;
    default:
      return `intent://watch.amazon.com/watch?asin=${id}`;
  }
};

const getYouTubeURL = (id) =>
  platform === "tvOS"
    ? `youtube://watch/${id}`
    : `https://www.youtube.com/watch?v=${id}`;

const getNetflixURL = (id) => `https://www.netflix.com/title/${id}`;

const LinkButton = ({ title, onPress }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TouchableOpacity
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onPress={() => onPress()}
      style={[styles.button, isFocused && styles.buttonFocused]}
    >
      <Text style={[styles.text, isFocused && styles.textFocused]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const YiReactApp = () => {
  return (
    <View style={styles.bodyContainer}>
      <LinkButton
        title="Prime Video"
        onPress={() => {
          Linking.openURL(getPrimeURL("amzn1.dv.gti.8ab6ff1b-f125-99f1-940c-521d57520e24"));
        }}
      />
      <LinkButton
        title="YouTube"
        onPress={() => {
          Linking.openURL(getYouTubeURL("otcgXyqbW-M"));
        }}
      />
      <LinkButton
        title="Netflix"
        onPress={() => {
          Linking.openURL(getNetflixURL("60020686"));
        }}
      />
    </View>
  );
};

export default YiReactApp;

const styles = StyleSheet.create({
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: "lightgray",
    marginBottom: 10,
  },
  buttonFocused: {
    borderWidth: 2,
    borderColor: "cyan",
  },
  text: {
    color: "black",
  },
  textFocused: {
    color: "white",
  },
});

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);
