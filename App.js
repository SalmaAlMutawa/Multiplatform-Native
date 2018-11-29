import React from "react";
import { createStackNavigator } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";

//Componenets
import Home from "./Components/Home";
import ItemsList from "./Components/ItemsList";
import ItemDetail from "./Components/ItemDetail";
import Cart from "./Components/Cart";
import LoginForm from "./Components/LoginForm";

export default class App extends React.Component {
  render() {
    return <OurStack />;
  }
}

const OurStack = createStackNavigator(
  {
    Home: Home,
    List: ItemsList,
    Detail: ItemDetail,
    Cart: Cart,
    Login: LoginForm
  },
  {
    initialRouteName: "Home"
  }
);
