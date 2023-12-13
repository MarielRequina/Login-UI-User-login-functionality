// HomeStyle.js

import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20, // Add horizontal padding for better spacing
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold", // Change to bold for a professional look
    marginBottom: 20,
    color: "white",
    textAlign: "center", // Center the text
  },
  logoutButton: {
    backgroundColor: "#d70000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20, // Increase top margin for better separation
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  waterRefillContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  waterInputLabel: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
  waterInput: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    color: "white",
    width: 150,
    textAlign: "center",
  },
  refillButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
  },
  refillButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default style;
