import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

// NativeBase Components
import { Container, Button } from "native-base";

class Home extends Component {
  render() {
    return (
      <Container>
        <Text>
          Welcome to Website Name! We really hope you enjoy shopping with us
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate("List")}
          rounded
          full
          style={{ backgroundColor: "#6200EE" }}
        >
          <Text style={{ color: "white" }}>Start Shopping</Text>
        </Button>
      </Container>
    );
  }
}

export default Home;
