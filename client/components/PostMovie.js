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

const axios = require("axios").default;

class PostMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      genre: ""
    };
  }

  updateValue(text, field) {
    // this.setState({ name: text });
    // this.setState({ genre: text });
    // this.setState({ rating: text });
    // this.setState({ explicit: text });

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
    console.warn(collection);

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
      .then((response) => console.log("Sucess:", response));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          onChangeText={(text) => this.updateValue(text, "name")}
        />
        <TextInput
          placeholder="Genre"
          onChangeText={(text) => this.updateValue(text, "genre")}
        />
        <TextInput
          placeholder="Rating"
          keyboardType="number-pad"
          onChangeText={(text) => this.updateValue(text, "rating")}
        />
        <TextInput
          placeholder="Explicit"
          onChangeText={(text) => this.updateValue(text, "explicit")}
        />

        <TouchableOpacity
          onPress={() => this.submitValue()}
          style={styles.button__main}
          color="#E9AFA3"
        >
          <Text>Submit</Text>
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
    borderWidth: 1
  }
});
