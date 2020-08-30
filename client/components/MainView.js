import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView
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
      <View style={styles.container}>
        <ScrollView>
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
                <TouchableOpacity
                  style={styles.button__delete}
                  onPress={() => this.deleteMovie(item.id)}
                >
                  <Text style={styles.button__deleteX}>X</Text>
                </TouchableOpacity>
                <Text style={styles.movie__title}>{item.name}</Text>
                <Text style={styles.movie__genre}>{item.genre}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.button__main}
            onPress={() => this.props.navigation.navigate("PostMovie")}
          >
            <Text style={styles.movie__title}>Add Movie</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
