import React from "react";
import MainView from "./components/MainView";
import { StyleSheet, Text, View } from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainView />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#685044",
    alignItems: "center",
    justifyContent: "center",
    padding: 14
  }
});
