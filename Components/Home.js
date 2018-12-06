import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Platform } from "react-native";

// NativeBase Components
import { Container, Button } from "native-base";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home"
  });
  render() {
    // const resizeMode = "center";
    const styles = StyleSheet.create({
      text: {
        // color: "blue",

        fontSize: 22,
        fontFamily: Platform.OS === "ios" ? "Times New Roman" : "Roboto",
        textAlign: "center"
      },
      bk: {
        backgroundColor: "#ffccff"
      }
    });
    return (
      <Container style={styles.bk}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)"
          }}
        >
          <Text style={styles.text}>
            Welcome to <Text style={{ fontWeight: "bold" }}>Zain World!</Text>
          </Text>
          <Text style={styles.text}>
            We really hope you have a Wonderful{"\n"} experience!
          </Text>

          <Image
            style={{ flex: 0.8 }}
            source={{
              uri:
                "https://d364xagvl9owmk.cloudfront.net/static/images/zain.gif"
            }}
          />
        </View>
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
