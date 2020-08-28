import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/MovieView.style.js";

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
