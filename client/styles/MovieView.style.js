import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#685044",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  movie__header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: 100,
    backgroundColor: "#3A405A",
    height: 90,
    width: "100%",
    paddingTop: 20
  },
  movie__text: {
    color: "#ffffff",
    letterSpacing: 1,
    fontSize: 25
  },
  button__main: {
    color: "#ffffff",
    backgroundColor: "#E9AFA3",
    width: 300,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    margin: 10
  },
  movie__update: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 1,
    textAlign: "center"
  }
});
