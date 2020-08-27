import { StatusBar } from "expo-status-bar";
import React from "react";
import Swipeout from "react-native-swipeout";
import { StyleSheet, Text, View, Button } from "react-native";

export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    return fetch("http://192.168.5.13:3000/api/v1/movies")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          list: responseJson
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteMovie(movieid) {
    fetch("http://192.168.5.13:3000/api/v1/movies/" + movieid, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  render() {
    const movies = this.state.list.map((movie, key) => {
      return (
        <View style={styles.movie__preview} key={key}>
          <Button
            style={styles.button__delete}
            title="X"
            color="#pink"
            onPress={() => this.deleteMovie(movie.id)}
          />

          <Text style={styles.movie__header}>{movie.name}</Text>
          <Text style={styles.movie__text}>{movie.genre}</Text>
        </View>
      );
    });

    return <View style={styles.container}>{movies}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#685044",
    alignItems: "center",
    justifyContent: "center",
    padding: 14
  },
  movie__preview: {
    margin: 10,
    height: 100,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A405A",
    borderRadius: 20
  },
  movie__header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff"
  },
  movie__text: {
    color: "#ffffff"
  },
  button__delete: {
    borderRadius: 50
  }
});
