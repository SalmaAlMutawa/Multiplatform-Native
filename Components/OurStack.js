import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "native-base";

//Componenets
import Home from "./Home";
import ItemsList from "./ItemsList";
import ItemDetail from "./ItemDetail";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Profile from "./Profile";

import Cart from "./Cart";
// import Checkout from "./Checkout";

const HomeTab = createStackNavigator(
  {
    Home: Home,
    List: ItemsList,
    Detail: ItemDetail
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      // headerTintColor: "white",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const CartTab = createStackNavigator(
  {
    Cart: Cart
    // Checkout: Checkout
  },
  {
    initialRouteName: "Cart"
  }
);

const UserTab = createStackNavigator(
  {
    Login: LoginForm,
    Signup: SignupForm,
    List: ItemsList,
    Profile: Profile
  },
  {
    initialRouteName: "Login"
  }
);

const BottomNav = createBottomTabNavigator(
  {
    HomeTab: HomeTab,
    CartTab: CartTab,
    UserTab: UserTab
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName, iconType;
        if (routeName === "HomeTab") {
          iconName = "home";
          iconType = "FontAwesome";
        } else if (routeName === "CartTab") {
          iconName = "shopping-cart";
          iconType = "FontAwesome";
        } else if (routeName === "UserTab") {
          iconName = "user";
          iconType = "FontAwesome";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        backgroundColor: "white"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default BottomNav;
