import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";

import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Picker,
  Form
} from "native-base";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.props.navigation.getParam("itemID");
  }

  changeHandler(event) {
    this.setState({ quantity: event });
  }
  handleAdd() {
    const { quantity } = this.state;
    const itemOrder = {
      itemID: this.props.item.id,
      itemName: this.props.item.name,
      itemPrice: this.props.item.price,
      quantity: parseInt(quantity)
    };
    this.props.addToCart(itemOrder);
  }

  render() {
    let passedItem = this.props.navigation.getParam("item");
    console.log(passedItem);
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{passedItem.category}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: passedItem.image }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
                <Text>{passedItem.name}</Text>
                <Text>Price: {passedItem.price} KD</Text>
                <Text>Description: {passedItem.description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Form style={{ paddingLeft: 50 }}>
                    <Picker
                      mode="dropdown"
                      placeholder="Quantity"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      placeholder="Quantity"
                      textStyle={{ color: "#5cb85c" }}
                      itemStyle={{
                        backgroundColor: "#d3d3d3",
                        marginLeft: 0,
                        paddingLeft: 10
                      }}
                      itemTextStyle={{ color: "#788ad2" }}
                      style={{ width: undefined }}
                      selectedValue={this.state.quantity}
                      onValueChange={this.changeHandler}
                    >
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                      <Picker.Item label="6" value="6" />
                      <Picker.Item label="7" value="7" />
                      <Picker.Item label="8" value="8" />
                      <Picker.Item label="9" value="9" />
                      <Picker.Item label="10" value="10" />
                    </Picker>
                  </Form>
                </Body>
                <Button rounded light onPress={this.handleAdd}>
                  <Text>Add to Cart</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    item: state.item.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItem: item_ID => dispatch(actionCreators.fetchItemDetail(item_ID)),
    addToCart: item => dispatch(actionCreators.addToCart(item))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
