import React from "react";
import { createStackNavigator } from "react-navigation";

//Componenets
import Home from "./Home";
import LoginForm from "./LoginForm";
import ItemsList from "./ItemsList";
import ItemDetail from "./ItemDetail";
import SignupForm from "./SignupForm";
import Cart from "./Cart";
// import Checkout from "./Checkout";

export default createStackNavigator(
  {
    Home: Home,
    List: ItemsList,
    Detail: ItemDetail,
    Login: LoginForm,
    Signup: SignupForm,
    Cart: Cart
    // Checkout: Checkout
  },
  {
    initialRouteName: "Home"
  }
);
