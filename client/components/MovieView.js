import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
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
        <TouchableOpacity
          style={styles.button__main}
          onPress={() =>
            this.props.navigation.navigate("UpdateMovie", { data: data })
          }
        >
          <Text style={styles.movie__update}>Update movie info</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MovieView;
