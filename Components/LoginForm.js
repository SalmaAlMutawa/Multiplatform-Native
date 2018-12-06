import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header
} from "native-base";

class LoginForm extends Component {
  static navigationOptions = {
    title: "Login"
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handlePass = this.handlePass.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }
  handlePass(value) {
    this.setState({ password: value });
  }
  handleUser(value) {
    this.setState({ username: value });
  }
  loginUser() {
    this.props.login(this.state, this.props.navigation);
  }

  componentWillMount() {
    if (this.props.user) {
      this.props.navigation.replace("Profile");
    }
  }
  componentDidMount() {
    if (this.props.user) {
      this.props.navigation.replace("Profile");
    }
  }

  componentDidUpdate() {
    if (this.props.user) {
      this.props.navigation.replace("Profile");
    }
  }
  render() {
    return (
      <Content>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "black" }}>Username</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={this.handleUser}
                  />
                </Item>
                <Body>
                  <Label style={{ color: "black" }}>Password</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={this.handlePass}
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button full success onPress={() => this.loginUser()}>
            <Text>Login</Text>
          </Button>
          <Button
            full
            info
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text>Signup</Text>
          </Button>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  login: (userData, nav) => dispatch(actionCreators.login(userData, nav)),
  resetForm: () => dispatch(actionCreators.setErrors({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
