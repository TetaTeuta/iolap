import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import styles from "../styles/MainView.style.js";

export default class MainView extends React.Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("http://192.168.5.13:3000/api/v1/movies");
    const json = await response.json();
    this.setState({ data: json });
  };

  deleteMovie(movieid) {
    fetch("http://192.168.5.13:3000/api/v1/movies/" + movieid, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(() => {
      alert("Movie Deleted");
    });
  }

  render() {
    return (
      <ScrollView>
        <TouchableOpacity
          style={styles.button__main}
          onPress={() => this.props.navigation.navigate("PostMovie")}
        >
          <Text style={styles.movie__header}>Add new movie</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            keyExtructor={(x, i) => i}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.movie__preview}
                onPress={() =>
                  this.props.navigation.navigate("MovieView", {
                    data: item
                  })
                }
              >
                <TouchableOpacity onPress={() => this.deleteMovie(item.id)}>
                  <Text style={styles.button__delete}>X</Text>
                </TouchableOpacity>
                <Text style={styles.movie__header}>{item.name}</Text>
                <Text style={styles.movie__text}>{item.genre}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}
