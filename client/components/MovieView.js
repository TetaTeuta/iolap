import React from "react";
import { StyleSheet, Text, View } from "react-native";

class MovieView extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie + " tralala");

    return (
      <View style={styles.container}>
        <Text>{movie.name}</Text>
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
