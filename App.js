import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Keyboard
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const listItems = [
  "Development",
  "Business",
  "IT & Software",
  "Office Productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "LifeStyle",
  "Photography",
  "Health & Fitness",
  "Teacher Training",
  "Music"
];

export default class App extends Component {
  state = {
    searchBarFocused: false
  };

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardDidShow
    );
    this.keyboardWillShow = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHide = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }
  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
  };
  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true });
  };
  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false });
  };

  onBackPress = () => {
    this.setState({ searchBarFocused: false });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 80,
            backgroundColor: "#940c0f",
            justifyContent: "center",
            paddingHorizontal: 5
          }}
        >
          <Animatable.View
            animation="slideInRight"
            duration={500}
            style={{
              height: 60,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              padding: 5
            }}
          >
            <Animatable.View
              animation={
                this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"
              }
              duration={400}
            >
              <Icon
                name={
                  this.state.searchBarFocused ? "md-arrow-back" : "ios-search"
                }
                size={24}
                style={{ marginLeft: 10 }}
                onPress={() => this.onBackPress()}
              />
            </Animatable.View>
            <TextInput
              placeholder="Search"
              style={{ fontSize: 20, marginLeft: 15, flex: 1 }}
            />
          </Animatable.View>
        </View>
        <FlatList
          style={{
            backgroundColor: this.state.searchBarFocused
              ? "rgba(0,0,0,0.3)"
              : "white"
          }}
          data={listItems}
          renderItem={({ item }) => (
            <Text style={{ padding: 20, fontSize: 20 }}>{item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
