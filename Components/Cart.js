import React, { Component } from "react";
import { StyleSheet, View, Container } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";

class Cart extends Component {
  getSubTotal() {
    let subTotal = 0;
    this.props.list.forEach(
      element => (subTotal += element.itemPrice * element.quantity)
    );
    return subTotal;
  }
  render() {
    const itemsList = this.props.list.map(item => {
      let count = 1;
      return (
        <OrderItemRow
          key={(count += 1)}
          item={item}
          removeItemFromCart={this.props.removeItemFromCart}
          match={this.props.match}
        />
      );
    });
    const header = ["Item", "Quantity", "Price", "Total"];
    const totalRow = ["Subtotal", "", "", subTotal];
    return (
      <Container>
        <View>
          <Table>
            <Row data={header} />
            <Rows data={itemsList} />
            <Row data={totalRow} />
          </Table>
        </View>
        <Button
          full
          info
          // onPress={() => this.props.navigation.navigate("Checkout")}
        >
          <Text>Proceed to Checkout</Text>
        </Button>
      </Container>
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
      dispatch(actionCreators.removeItemFromCart(item))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
