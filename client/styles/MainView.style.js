import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#685044",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  movie__preview: {
    margin: 10,
    height: 120,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A405A",
    borderRadius: 20,
    padding: 10
  },
  movie__title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 1
  },
  movie__genre: {
    color: "#ffffff",
    letterSpacing: 1
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
  button__delete: {
    backgroundColor: "#F9DEC9",
    height: 23,
    width: 23,
    borderRadius: 20,
    alignSelf: "flex-end"
  },
  button__deleteX: {
    textAlign: "center"
  }
});
