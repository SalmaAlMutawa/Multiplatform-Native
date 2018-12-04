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

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
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
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.props.item.category}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: this.props.item.image }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Text>{this.props.item.name}</Text>
              <Text>Price: {this.props.item.price} KD</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button
                  onPress={() =>
                    this.props.navigation.navigate("Detail", {
                      item: this.props.item
                    })
                  }
                  rounded
                  light
                >
                  <Text>View</Text>
                </Button>
                <Body>
                  <Form>
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
                      <Picker.Item label="Quantity" defaultValue="1" />
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

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch(actionCreators.addToCart(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ItemCard);
