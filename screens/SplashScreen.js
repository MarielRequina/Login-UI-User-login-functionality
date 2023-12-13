import React, { useEffect } from "react";
import {View, Text, Image, StyleSheet, KeyboardAvoidingView,} from "react-native";

const SplashScreen = () => {
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      // Replace the splash screen with your main app component or navigate to another screen
      // Example: navigation.replace('MainAppScreen');
    }, 3000);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Image source={require("../assets/water.png")} style={styles.logo} />
      <Text style={styles.appName}>Water Refilling</Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#011f4b",
  },
  logo: {
    width: 190,
    height: 150,
    resizeMode: "contain",
  },
  appName: {
    marginTop: 20,
    fontSize: 45,
    fontWeight: "bold",
    color: "#6497b1",
  },
});

export default SplashScreen;
