import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";
import { StyleSheet, View, Container } from "react-native";
import {
  Text,
  Left,
  Body,
  Right,
  List,
  Button,
  ListItem,
  Icon
} from "native-base";

class Cart extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Cart"
  });

  getSubTotal() {
    let subTotal = 0;
    this.props.list.forEach(
      element => (subTotal += element.itemPrice * element.quantity)
    );
    return subTotal;
  }

  renderItem(item, id) {
    return (
      <ListItem key={id}>
        <Left>
          <Text style={{ color: "black" }}>{item.itemName}</Text>
          <Text note style={{ color: "black", marginLeft: 30 }}>
            {item.quantity}
          </Text>

          <Text style={{ color: "black", marginLeft: 30 }}>
            {item.itemPrice}
          </Text>

          <Text style={{ color: "black", marginLeft: 30 }}>
            {parseFloat(
              Math.round(item.itemPrice * item.quantity * 100) / 100
            ).toFixed(2)}
          </Text>
        </Left>
        <Right>
          <Button
            transparent
            onPress={() => this.props.removeItemFromCart(item)}
          >
            <Icon
              name="trash"
              type="Entypo"
              style={{ color: "red", fontSize: 21 }}
            />
          </Button>
        </Right>
      </ListItem>
    );
  }

  render() {
    return (
      <List>
        <ListItem>
          <Left>
            <Text
              style={{ color: "black", marginRight: 30, fontWeight: "bold" }}
            >
              Item
            </Text>
            <Text
              style={{ color: "black", marginRight: 30, fontWeight: "bold" }}
            >
              Quantity
            </Text>
            <Text
              style={{ color: "black", marginLeft: 30, fontWeight: "bold" }}
            >
              Price
            </Text>
            <Text
              style={{ color: "black", marginLeft: 30, fontWeight: "bold" }}
            >
              Total
            </Text>
            <Text
              style={{ color: "black", marginLeft: 30, fontWeight: "bold" }}
            >
              Remove
            </Text>
          </Left>
        </ListItem>

        {this.props.list.map((item, id) => this.renderItem(item, id))}
        <Text style={{ color: "black", marginLeft: 16, fontWeight: "bold" }}>
          SubTotal: {this.getSubTotal()} KD
        </Text>

        <Button
          full
          danger
          onPress={() => this.props.checkout(this.props.list)}
        >
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.cart.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: item =>
      dispatch(actionCreators.removeItemFromCart(item)),
    checkout: orderList => dispatch(actionCreators.checkout(orderList))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
