import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#685044",
    alignItems: "center",
    justifyContent: "center",
    padding: 14
  },

  textinput__box: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 30,
    margin: 5,
    paddingLeft: 30,
    height: 60
  },
  button__main: {
    color: "#ffffff",
    backgroundColor: "#E9AFA3",
    width: 300,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 5
  },
  movie__header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 50
  },
  movie__submit: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff"
  }
});
