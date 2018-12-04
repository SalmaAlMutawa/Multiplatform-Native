import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";

class SearchBar extends Component {
  onSearch(con) {
    console.log(con);
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              type="text"
              onChange={e => {
                this.onSearch(e);
              }}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.filteredItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: query => dispatch(actionCreators.filterItems(query))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
