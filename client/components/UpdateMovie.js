import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import styles from "../styles/UpdateMovie.style";

class UpdateMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      genre: "",
      rating: null,
      explicit: null
    };
  }

  submitValue(movieid) {
    const data = {};
    (data.name = this.state.name),
      (data.genre = this.state.genre),
      (data.rating = this.state.rating),
      (data.explicit = this.state.explicit);
    console.log(data);

    fetch("http://192.168.5.13:3000/api/v1/movies/" + movieid, {
      method: "PUT",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((error) => console.log(error));
  }

  updateMovie(text, field) {
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

  render() {
    const { data } = this.props.route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.movie__name}>{data.name}</Text>
        <TextInput
          style={styles.textinput__box}
          placeholder="New Name"
          onChangeText={(text) => this.updateMovie(text, "name")}
        />
        <TextInput
          style={styles.textinput__box}
          placeholder="New Genre"
          onChangeText={(text) => this.updateMovie(text, "genre")}
        />
        <TextInput
          style={styles.textinput__box}
          placeholder="New Rating"
          onChangeText={(text) => this.updateMovie(text, "rating")}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.textinput__box}
          placeholder="New Explicit"
          onChangeText={(text) => this.updateMovie(text, "explicit")}
          keyboardType="number-pad"
        />

        <TouchableOpacity
          style={styles.button__save}
          onPress={() => this.submitValue()}
        >
          <Text style={styles.button__text}>Save</Text>
        </TouchableOpacity>
        {Platform.OS === "android" ? (
          <KeyboardAvoidingView behavior="height" />
        ) : null}
      </View>
    );
  }
}

export default UpdateMovie;
