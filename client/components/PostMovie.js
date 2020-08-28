import React from "react";
import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

class PostMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      genre: ""
    };
  }

  updateValue(text, field) {
    if (field == "name") {
      this.setState({
        name: text
      });
    } else if (field == "genre") {
      this.setState({
        genre: text
      });
    } else if (field == "rating") {
      this.setState({
        rating: text
      });
    } else if (field == "explicit") {
      this.setState({
        explicit: text
      });
    }
  }

  submitValue() {
    const collection = {};
    (collection.name = this.state.name),
      (collection.genre = this.state.genre),
      (collection.rating = this.state.rating),
      (collection.explicit = this.state.explicit);
    console.log(collection);

    const url = "http://192.168.5.13:3000/api/v1/movies/";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(collection),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => alert("Movie added"));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.movie__header}>What's your favorite movie?</Text>
        <TextInput
          style={styles.textinput__box}
          placeholder="Name"
          onChangeText={(text) => this.updateValue(text, "name")}
        />
        <TextInput
          style={styles.textinput__box}
          placeholder="Genre"
          onChangeText={(text) => this.updateValue(text, "genre")}
        />
        <TextInput
          style={styles.textinput__box}
          placeholder="Rating"
          keyboardType="number-pad"
          onChangeText={(text) => this.updateValue(text, "rating")}
        />
        <TextInput
          style={styles.textinput__box}
          placeholder="Explicit"
          keyboardType="number-pad"
          onChangeText={(text) => this.updateValue(text, "explicit")}
        />
        <TouchableOpacity
          style={styles.button__main}
          onPress={() => this.submitValue()}
          color="#E9AFA3"
        >
          <Text style={styles.movie__submit}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PostMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#685044",
    alignItems: "center",
    justifyContent: "center",
    padding: 14
  },

  textinput__box: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 30,
    margin: 5,
    paddingLeft: 30,
    height: 60
  },
  button__main: {
    color: "#ffffff",
    backgroundColor: "#E9AFA3",
    width: 300,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 5
  },
  movie__header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 50
  },
  movie__submit: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff"
  }
});
