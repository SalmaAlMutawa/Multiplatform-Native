import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

class Loading extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)"
        }}
      >
        <Image
          style={{ flex: 0.8 }}
          source={{
            uri: "https://d364xagvl9owmk.cloudfront.net/static/images/zain.gif"
          }}
        />
      </View>
    );
  }
}

export default Loading;
