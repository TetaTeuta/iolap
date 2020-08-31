import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#685044",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  movie__name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 1,
    textAlign: "center",
    backgroundColor: "#3A405A",
    height: 90,
    width: "100%",
    marginBottom: 100,
    padding: 15
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
  button__save: {
    color: "#ffffff",
    backgroundColor: "#E9AFA3",
    width: 300,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 5
  },
  button__text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff"
  }
});
