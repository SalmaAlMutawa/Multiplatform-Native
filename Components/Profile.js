import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Platform } from "react-native";

// NativeBase Components
import { Container, Button } from "native-base";
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";

class Profile extends Component {
  componentDidUpdate() {
    if (!this.props.user) {
      this.props.navigation.replace("Login");
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Profile"
  });
  render() {
    const styles = StyleSheet.create({
      text: {
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
            Hello{" "}
            <Text style={{ fontWeight: "bold" }}>
              {this.props.user && this.props.user.username}
            </Text>
          </Text>
          <Text style={styles.text}>
            We hope you are enjoying your shopping experience!
          </Text>
        </View>
        <Button
          onPress={() => this.props.logout()}
          rounded
          full
          style={{ backgroundColor: "#6200EE" }}
        >
          <Text style={{ color: "white" }}>Logout</Text>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
