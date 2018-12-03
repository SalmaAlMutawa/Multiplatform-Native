import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from "native-base";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillUnmount() {
    this.props.resetForm();
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.signup(this.state, this.props.history);
  }
  render() {
    const { first_name, last_name, email, username, password } = this.state;
    const { errors } = this.props;
    return (
      <Container>
        <Header />
        <Content>
          <Form onSubmit={this.submitHandler} noValidate>
            <Item floatingLabel>
              <Label>Fist Name</Label>
              <Input
                value={first_name}
                required
                name="first_name"
                onChange={this.changeHandler}
              />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input
                value={last_name}
                required
                name="last_name"
                onChange={this.changeHandler}
              />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                value={email}
                required
                name="email"
                onChange={this.changeHandler}
              />
            </Item>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                value={username}
                required
                name="username"
                onChange={this.changeHandler}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                value={password}
                required
                name="password"
                onChange={this.changeHandler}
              />
            </Item>
          </Form>
          <Item>
            <Button rounded success type="submit">
              <Text>Signup</Text>
            </Button>

            <Button
              rounded
              info
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text>Login</Text>
            </Button>
          </Item>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  signup: userData => dispatch(actionCreators.signup(userData)),
  resetForm: () => dispatch(actionCreators.setErrors({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
