import React from "react";
import MainView from "./components/MainView";
import MovieView from "./components/MovieView";
import PostMovie from "./components/PostMovie";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="MainView">
          <Stack.Screen name="MainView" component={MainView} />
          <Stack.Screen name="MovieView" component={MovieView} />
          <Stack.Screen name="PostMovie" component={PostMovie} />
        </Stack.Navigator>

        {/* <View style={styles.container}>
        <MainView />
      </View> */}
      </NavigationContainer>
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
