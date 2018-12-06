import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

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
        fontWeight: "bold",
        fontSize: 22,
        fontFamily: "Times New Roman",
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
          <Text style={styles.text}>WELCOME TO OUR SHOP!</Text>

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
