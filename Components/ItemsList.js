import React, { Component } from "react";

import { connect } from "react-redux";
import { Container, Body, Text, Content } from "native-base";

// Components
import ItemCard from "./ItemCard";

class ItemsList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Items List"
  });
  render() {
    const { filteredItems } = this.props;

    const itemCards = filteredItems.map(item => (
      <ItemCard
        key={item.name}
        item={item}
        navigation={this.props.navigation}
      />
    ));
    return <Content>{itemCards}</Content>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    items: state.items.items,
    filteredItems: state.items.filteredItems
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemsList);
