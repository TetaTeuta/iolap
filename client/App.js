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
          <Text>{movie.name}</Text>
        </View>
      );
    });
    console.log(movies);

    return <View>{movies}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9DEC9",
    alignItems: "center",
    justifyContent: "center"
  },
  movie__preview: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    margin: 50,
    justifyContent: "center",
    backgroundColor: "#3A405A"
  }
});
