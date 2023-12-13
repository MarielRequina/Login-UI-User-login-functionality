import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  transparentBorder: {
    backgroundColor: "rgba(200, 200, 200, 0.2)", // Adjust the alpha value for transparency
    borderRadius: 10, // Adjust the border radius as needed
    padding: 20,
    margin: 10,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    justifyContent: "center",
  },
  input: {
    borderColor: "#0b2e19",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
    color: "#fff",
    marginHorizontal: 25,
    marginBottom: 5,
  },
  inputGroup: {
    marginBottom: 25,
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#03396c",
    marginHorizontal: 23,
    marginTop: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: "#b3cde0",
    fontWeight: "bold",
    fontSize: 15,
  },
  greyButton: {
    backgroundColor: "#999999",
  },
  boldText: {
    fontWeight: "bold",
    color: "#fff",
  },
  orangeText: {
    color: "#F5772B",
  },
  backgroundImage: {
    flex: 1,
  },
  centerAlign: {
    paddingLeft: 30,
  },
  orText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  logoContainer: {
    flexDirection: "column",
    alignItems: "center", // Center the items horizontally
    marginBottom: 30,
    marginLeft: 10,
  },
  logo: {
    width: 90,
    height: 90,
    marginRight: 25,
   
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  bottomLink: {
    flex: 1,
  },
  bottomText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },

  passwordPolicyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 17,
    marginTop: 15,
  },
});

export default style;

