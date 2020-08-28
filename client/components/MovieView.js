import React from "react";
import { StyleSheet, Text, View } from "react-native";

class MovieView extends React.Component {
  render() {
    const { data } = this.props.route.params;
    console.log(data + " tralala");

    return (
      <View style={styles.container}>
        <Text style={styles.movie__header}>{data.name}</Text>
        <Text style={styles.movie__text}>Movie genre: {data.genre}</Text>
        <Text style={styles.movie__text}>Movie rating: {data.rating}</Text>
        <Text style={styles.movie__text}>{data.explicit}</Text>
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
    justifyContent: "flex-start"
  },
  movie__header: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: 100,
    backgroundColor: "#E9AFA3",
    height: 90,
    width: "100%",
    alignItems: "center"
  },
  movie__text: {
    color: "#ffffff",
    letterSpacing: 1,
    fontSize: 25,
    alignItems: "flex-start"
  }
});
