import { StyleSheet } from 'react-native';

const signupStyle = StyleSheet.create({
    
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    justifyContent: 'center',
  },
  input: {
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 25,
  },
  transparentBorder: {
    backgroundColor: "rgba(200, 200, 200, 0.2)", // Adjust the alpha value for transparency
    borderRadius: 10, // Adjust the border radius as needed
    padding: 20,
    margin: 10,
  },
  inputGroup: {
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#005b96',
    marginHorizontal: 23,
    marginTop: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: '#b3cde0',
    fontWeight: 'bold',
    fontSize: 15,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#fff',
  },

  orangeText: {
    color: '#F5772B',
  },
  backgroundImage: {
    flex: 1,
  },
  centerAlign: {
    paddingLeft: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 80,
  },
  logo: {
    width: 90,
    height: 90,
    marginRight: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 55,
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  bottomLink: {
    flex: 1,
  },
  bottomText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

  passwordPolicyText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 17,
    marginTop: 15,
  },
  orangeText: {
    color: '#F5772B',
  },
});

export default signupStyle;
