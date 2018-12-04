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
  getSubTotal() {
    let subTotal = 0;
    this.props.list.forEach(
      element => (subTotal += element.itemPrice * element.quantity)
    );
    return subTotal;
  }
  // render() {
  //   const itemsList = this.props.list.map(item => {
  //     let count = 1;
  //     return (
  //       <OrderItemRow
  //         key={(count += 1)}
  //         item={item}
  //         removeItemFromCart={this.props.removeItemFromCart}
  //         match={this.props.match}
  //       />
  //     );
  //   });

  renderItem(item, id) {
    console.log(item);
    return (
      <ListItem key={id}>
        <Left>
          <Text style={{ color: "black" }}>{item.itemName}</Text>
          <Text note style={{ color: "black", marginLeft: 16 }}>
            {item.quantity}
          </Text>

          <Text style={{ color: "black", marginLeft: 16 }}>
            {item.itemPrice}
          </Text>

          <Text style={{ color: "black", marginLeft: 16 }}>
            {this.getSubTotal()}
          </Text>
        </Left>
        <Right>
          <Button
            transparent
            onPress={() => this.props.removeItemFromCart(item)}
          >
            <Icon name="trash" style={{ color: "danger", fontSize: 21 }} />
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
            <Text style={{ color: "black", marginRight: 100 }}>Item</Text>
            <Text style={{ color: "black", marginRight: 30 }}>Quantity</Text>
            <Text style={{ color: "black", marginLeft: 30 }}>Price</Text>
            <Text style={{ color: "black", marginLeft: 40 }}>Total</Text>
          </Left>
        </ListItem>
        {this.props.list.map((item, id) => this.renderItem(item, id))}
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
