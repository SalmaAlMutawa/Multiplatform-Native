import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

// NativeBase Components
import { Container, Button } from "native-base";

class Home extends Component {
  render() {
    return (
      <Container className="container text-center">
        <Text>
          Welcome to Website Name! We really hope you enjoy shopping with us
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate("List")}
          rounded
          light
        >
          <Text>Start Shopping</Text>
        </Button>
      </Container>
    );
  }
}

export default Home;
