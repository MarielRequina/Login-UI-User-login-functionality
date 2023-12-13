import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Alert, TextInput } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import style from "../styles/HomeStyle";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [waterToAdd, setWaterToAdd] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            signOut(auth)
              .then(() => {
                navigation.navigate("Login");
              })
              .catch((error) => {
                // Handle logout error
              });
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleRefill = () => {
    // Ensure that waterToAdd is a valid number
    const waterAmount = parseFloat(waterToAdd);

    if (isNaN(waterAmount) || waterAmount <= 0) {
      // Show an alert if the entered value is not a valid number or is less than or equal to zero
      Alert.alert("Invalid Input", "Please enter a valid amount of water to refill.");
      return;
    }

    // Handle water refill logic here
    // You can use the value in `waterAmount` for the amount of water to refill
    // Update state, database, or perform any necessary actions

    // For demonstration purposes, show an alert that the water is added
    Alert.alert("Water Added!", `You have added ${waterAmount} ML of water.`);
  };

  const handleViewRefills = () => {
    // Handle view refills logic here
    // You can navigate to a screen showing the user's refill history
  };

  return (
    <ImageBackground
      source={require("../assets/waterback.jpg")}
      style={style.background}
    >
      <View style={style.container}>
        <Text style={style.greetingText}>
          Hello, Welcome to our Shop
        </Text>
        <Text style={style.greetingText}>
          {user?.email}
        </Text>
        <View style={style.waterRefillContainer}>
          <Text style={style.waterInputLabel}>Enter ML of water to add:</Text>
          <TextInput
            style={style.waterInput}
            placeholder="e.g., 500"
            keyboardType="numeric"
            onChangeText={(text) => setWaterToAdd(text)}
            value={waterToAdd}
          />
          <TouchableOpacity onPress={handleRefill} style={style.refillButton}>
            <Text style={style.refillButtonText}>Refill</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogout} style={style.logoutButton}>
          <Text style={style.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
