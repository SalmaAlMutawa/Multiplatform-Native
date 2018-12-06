import React from "react";
import * as Expo from "expo";
import { AppLoading } from "expo";
// import { createStackNavigator } from "react-navigation";
// import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import OurStack from "./Components/OurStack";
import Store from "./Store";

import { checkForExpiredToken } from "./Store/actions/authentication";
import { fetchItems } from "./Store/actions/items";
// import { fetchOrders } from "./Store/actions/orders";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsAreLoaded: false
    };
  }
  componentDidMount() {
    Store.dispatch(fetchItems());
  }
  componentWillMount() {
    Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }).then(() => this.setState({ fontsAreLoaded: true }));
    Store.dispatch(checkForExpiredToken());
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={Store}>
        <OurStack />
      </Provider>
    );
  }
}

export default App;
