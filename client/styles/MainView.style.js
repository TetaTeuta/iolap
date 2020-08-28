import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#685044",
    alignItems: "center",
    justifyContent: "center"
  },
  movie__preview: {
    margin: 10,
    height: 120,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A405A",
    borderRadius: 20
  },
  movie__header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 1,
    textAlign: "center"
  },
  movie__text: {
    color: "#ffffff",
    letterSpacing: 1
  },
  button__main: {
    color: "#ffffff",
    backgroundColor: "#E9AFA3",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start"
  },
  button__delete: {
    backgroundColor: "#F9DEC9",
    height: 20,
    width: 20,
    textAlign: "center",
    borderRadius: 20,
    marginBottom: 5
  }
});