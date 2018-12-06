import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../Store/actions";
import Loading from "./Loading";

import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  Right,
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
  static navigationOptions = ({ navigation }) => ({
    title: "Item Detail"
  });
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    const id = this.props.navigation.getParam("itemID");
    this.props.getItem(id);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.navigation.getParam("itemID") !==
      prevProps.navigation.getParam("itemID")
    ) {
      this.props.getItem(this.props.navigation.getParam("itemID"));
    }
  }

  changeHandler(event) {
    this.setState({ quantity: event });
  }
  handleAdd(passedItem) {
    const { quantity } = this.state;
    const itemOrder = {
      itemID: passedItem.id,
      itemName: passedItem.name,
      itemPrice: passedItem.price,
      quantity: parseInt(quantity)
    };
    this.props.addToCart(itemOrder);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      let passedItem = this.props.item;
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
              <CardItem
                style={{
                  marginLeft: "15%"
                }}
              >
                <Body>
                  <Image
                    source={{ uri: passedItem.image }}
                    style={{
                      flex: 1,
                      alignSelf: "stretch",
                      width: 250,
                      height: 250
                    }}
                    resizeMode="contain"
                  />
                  <Text style={{ fontWeight: "bold" }}>{passedItem.name}</Text>
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
                        iosIcon={<Icon name="ios-arrow-down" type="Ionicons" />}
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
                        <Picker.Item label="Quantity" value="1" />
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
                  <Button
                    rounded
                    info
                    onPress={() => this.handleAdd(passedItem)}
                  >
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
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    item: state.item.item,
    loading: state.item.loading
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
