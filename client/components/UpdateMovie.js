import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../styles/MovieView.style.js";

class UpdateMovie extends React.Component {
  render() {
    // const { data } = this.props.route.params;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput__box}
          placeholder="Genre"
          onChangeText={(text) => this.updateValue(text, "name")}
        />
        <TextInput
          style={styles.textinput__box}
          placeholder="Rating"
          onChangeText={(text) => this.updateValue(text, "name")}
        />
        <TextInput
          style={styles.textinput__box}
          placeholder="Explicit"
          onChangeText={(text) => this.updateValue(text, "name")}
        />
      </View>
    );
  }
}

export default UpdateMovie;
