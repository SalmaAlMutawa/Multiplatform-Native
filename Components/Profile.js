import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

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
          <Text style={styles.text}>
            HELLO {this.props.user && this.props.user.username.toUpperCase()}
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
