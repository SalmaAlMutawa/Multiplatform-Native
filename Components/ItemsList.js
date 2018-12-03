import React, { Component } from "react";

import { connect } from "react-redux";
import { Container, Text, Content } from "native-base";

// Components
import ItemCard from "./ItemCard";
import SearchBar from "./SearchBar";

class ItemsList extends Component {
  render() {
    const { loading, filteredItems } = this.props;

    const itemCards = filteredItems.map(item => (
      <ItemCard
        key={item.name}
        item={item}
        navigation={this.props.navigation}
      />
    ));
    console.log(this.props.items.length);
    return (
      // <SearchBar />
      <Container>{itemCards}</Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    items: state.items.items,
    loading: state.items.loading,
    filteredItems: state.items.filteredItems
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemsList);
