import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";

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

  getMovie(movieid) {
    fetch("http://192.168.5.13:3000/api/v1/movies/" + movieid, {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(this.props.navigation.navigate("MovieView"));
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
      console.log(movie);
      return (
        <TouchableOpacity
          onPress={() => {
            this.getMovie(movie.id);
          }}
        >
          <View style={styles.movie__preview} key={key}>
            <Button
              style={styles.button__main}
              title="X"
              color="#pink"
              onPress={() => this.deleteMovie(movie.id)}
            />

            <Text style={styles.movie__header}>{movie.name}</Text>
            <Text style={styles.movie__text}>{movie.genre}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button__main}
            onPress={() => this.props.navigation.navigate("PostMovie")}
          >
            <Text>Add movie</Text>
          </TouchableOpacity>

          {movies}
        </View>
      </ScrollView>
    );
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
  button__main: {
    borderRadius: 50,
    color: "#E9AFA3"
  }
});
