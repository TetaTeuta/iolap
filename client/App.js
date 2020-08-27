import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    return fetch("http://192.168.5.13:3000/api/v1/movies")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const movies = this.state.dataSource.map((movie, key) => {
      return (
        <View style={styles.movie__preview} key={key}>
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
  }
});
