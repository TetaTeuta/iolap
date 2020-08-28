import React from "react";
import { StyleSheet, Text, View } from "react-native";

class MovieView extends React.Component {
  render() {
    const { data } = this.props.route.params;
    console.log(data + " tralala");

    return (
      <View style={styles.container}>
        <Text>{data}</Text>
      </View>
    );
  }
}

export default MovieView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#685044",
    alignItems: "center",
    justifyContent: "center",
    padding: 14
  }
});
